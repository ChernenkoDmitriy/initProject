import md5 from 'js-md5';
import base64js from 'base64-js';
import aesjs from 'aes-js';
import sha512 from 'js-sha512';

const completeBlocksData = (message) => {
    const delta = message.length % 16;
    if (delta > 0) {
        let zeroBytes = new Uint8Array(16 - delta);
        zeroBytes.fill(0);
        return Uint8Array.from([...message, ...zeroBytes]);
    } else {
        return message;
    }
}

const removeZeroBytesFromEnd = (bytes) => {
    while (bytes.length > 0 && bytes[bytes.length - 1] === 0) {
        bytes = bytes.slice(0, -1);
    }
    return bytes;
}

const toUTF8Array = (str) => {
    const utf8 = unescape(encodeURIComponent(str));
    const arr = new Uint8Array(utf8.length);
    for (let i = 0; i < utf8.length; i++) {
        arr[i] = utf8.charCodeAt(i);
    }
    return arr;
}

export const getHashString = (data) => {
    try {
        const hash = sha512.digest(data);
        return base64js.fromByteArray(hash);
    } catch (error) {
        return null;
    }
}

export const getPassHash = (password) => {
    const passHashBase64 = getHashString(password);
    return passHashBase64 ? toUTF8Array(passHashBase64) : null;
}

export const decode = (data, key) => {
    const decodeData = base64js.toByteArray(data);
    const iv = decodeData.slice(0, 16);
    const dataBytes = decodeData.slice(16);
    const keyHash = md5.digest(key);
    const aesCbc = new aesjs.ModeOfOperation.cbc(keyHash, iv);
    const decryptedBytes = aesCbc.decrypt(dataBytes);
    return removeZeroBytesFromEnd(decryptedBytes);
}

export const encode = (data, key) => {
    const keyBytes = md5.digest(key);
    const iv = Array(16).fill().map(() => Math.floor(Math.random() * 255));
    const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, iv);
    const dataEncode = completeBlocksData(data);
    const encryptedData = aesCbc.encrypt(dataEncode);
    const res = Uint8Array.from([...iv, ...encryptedData]);
    return base64js.fromByteArray(res);
}

export const encodeString = (string, key) => {
    try {
        const textURI = encodeURIComponent(string);
        const array = toUTF8Array(textURI);
        return encode(array, key);
    } catch (error) {
        return null;
    }
}

export const decodeString = (data, key) => {
    try {
        const array = decode(data, key);
        const textURI = String.fromCharCode.apply(null, array);
        return decodeURIComponent(textURI);
    } catch (error) {
        return null;
    }
}