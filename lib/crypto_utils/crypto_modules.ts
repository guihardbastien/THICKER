import * as CUtils from './utils'
import * as StringUtils from '../string_utils/string_modules'

/**
 * 
 */
export function hexToBase64(hexInput: string): string {
    
    const hex = hexInput.toUpperCase();
    let binBuffer: string = CUtils.hexToBin(hex);

    binBuffer = CUtils.padding(binBuffer);
    const chunks = StringUtils.chunkString(binBuffer, 6);
    if(chunks === null){
        throw Error("Chunks are null");
    }
    let chunksBuffer: string = "";
    chunks.forEach(element => {
        chunksBuffer = chunksBuffer + CUtils.BIN_TO_BASE64[element]
    });
    return chunksBuffer;
}

/**
 * 
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
 */
export function singleByteXorCipher(hex: string):string {
    return "1";
}

/**
 * 
 */
export function detectSingleCharXor(hex: string):string {
    return "1";
}

/**
 * 
 */
export function repeatingKeyXor(hex: string):string {
    return "1";
}

/**
 * 
 */
export function belovedAlg(hex: string):string {
    return "1";
}
