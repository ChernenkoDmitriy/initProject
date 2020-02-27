import ICryptoUtils from "../../../../src/services/сryptoUtils";

const userSecret = Uint8Array.from([118, 83, 115, 97, 114, 51, 55, 48, 56, 74, 118, 112, 57, 83, 122, 105, 50, 78, 87, 90, 90, 48, 50, 66, 113, 112, 49, 113, 82, 67, 70, 112, 98, 99, 84, 90, 80, 100, 66, 104, 110, 87, 103, 115, 53, 87, 116, 78, 90, 75, 110, 118, 67, 88, 100, 104, 122, 116, 109, 101, 68, 50, 99, 109, 87, 49, 57, 50, 67, 70, 53, 98, 68, 117, 102, 75, 82, 112, 97, 121, 114, 87, 47, 105, 115, 103, 61, 61])

describe('ICryptoUtils', () => {
    test('IGetPassHash with correct data', () => {
        const passHash = ICryptoUtils.IGetPassHash('secret');
        expect(passHash).toEqual(userSecret);
    });
    test('IGetPassHash with uncorrect data', () => {
        const passHash = ICryptoUtils.IGetPassHash(null);
        expect(passHash).toEqual(null);
    });
    test('IEncodeString->IDecodeString', () => {
        const encodedString = ICryptoUtils.IEncodeString('secret', '1111');
        const decodedString = ICryptoUtils.IDecodeString(encodedString, '1111');
        expect(decodedString).toEqual('secret');
    });
    test('IEncode->IDecode', () => {
        const encodedString = ICryptoUtils.IEncode(userSecret, '1111');
        const decodedString = ICryptoUtils.IDecode(encodedString, '1111');
        expect(decodedString).toEqual(userSecret);
    });
})