import * as CUtils from './utils'
import * as StringUtils from '../string_utils/string_modules'

/**
 * 
 * @param hexInput 
 */
export function hexToBase64(hexInput: string): string {
    const hex = hexInput.toUpperCase();
    const binBuffer: string = CUtils.padding(CUtils.hexToBin(hex));
    const chunks = StringUtils.chunkString(binBuffer, 6);
    if(chunks === null){ throw Error("Chunks are null");}
    let chunksBuffer: string = "";
    chunks.forEach(element => {
        chunksBuffer = chunksBuffer + CUtils.BIN_TO_BASE64[element]
    });
    return chunksBuffer;
}

/**
 * 
 * @param hex1 
 * @param hex2 
 */
export function fixedHexXor(hex1: string, hex2: string):string {
    if (hex1.length !== hex2.length){
        throw Error ("Cannot xor input with different lengths")
    }
    const h1 = CUtils.hexToBin(hex1);
    const h2 = CUtils.hexToBin(hex2);
    const xored = CUtils.xor(h1,h2);
    let result = "";
    StringUtils.chunkString(xored,4)?.forEach(elt =>{
        result = result + CUtils.BIN_TO_HEX[elt] 
    })
    return result;
}

/**
 * 
 * @param inputHex 
 * @param inputKey 
 */
export function singleByteXorCipher(inputHex: string, inputKey: number):string {

    const hex = inputHex.toUpperCase();
    const bin: string = CUtils.hexToBin(hex);
    let binKey = inputKey.toString(2);
    binKey = "0".repeat(8 - binKey.length) + binKey;
    if(binKey.length%8 !== 0){
        throw Error ("8 bytes required 0 - 255");
    }
    let cipher = binKey.repeat(bin.length/8);
    return CUtils.toAscii(CUtils.xor(bin,cipher));
}

/**
 * 
 */
export function repeatingKeyXor(message: string, inputKey: string):string {
    let buffer = "";
    for (let i = 0; i < message.length; i++) {
        const char = message.charAt(i);
        const keyChar = inputKey.charAt(i%inputKey.length)
        buffer += CUtils.xorSingleByte(char,keyChar)
    }
    return CUtils.binToHex(buffer);

}

/**
 * 
 */
export function belovedAlg(hex: string):string {
    return "1";
}
