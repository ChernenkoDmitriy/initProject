import { encode, decode, getPassHash, encodeString, decodeString } from "./services"

const IDecode = (data, key) => {
    return decode(data, key);
}

const IEncode = (data, key) => {
    return encode(data, key);
}

const IGetPassHash = (data) => {
    return getPassHash(data);
}

const IEncodeString = (data, secret) => {
    return encodeString(data, secret);
}

const IDecodeString = (data, secret) => {
    return decodeString(data, secret);
}

const ICryptoUtils = {
    IEncodeString,
    IDecodeString,
    IDecode,
    IEncode,
    IGetPassHash,
}

export default ICryptoUtils;