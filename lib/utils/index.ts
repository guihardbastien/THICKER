import * as StringUtils from '../core/string';
import * as CErrors from '../errors';

/**
 * Xor two binary numbers together
 * @param bin1
 * @param bin2
 */
export function xor(bin1: string, bin2: string) {
    CErrors.hasSameLength(bin1, bin2);
    let buffer = '';
    for (let i = 0; i < bin1.length; i += 1) {
        const char1 = parseInt(bin1.charAt(i), 10);
        const char2 = parseInt(bin2.charAt(i), 10);
        const xored = char1 ^ char2;
        buffer = buffer + xored;
    }
    return buffer;
}

/**
 * Padding function for hex to base64
 * @param input binary string
 */
export function padding(input: string) {
    if (input.length % 6 === 2) {
        return `0000${input}`;
    }
    if (input.length % 6 === 4) {
        return `00${input}`;
    }
    return input;
}

/**
 * Turns bin string to ascii string
 * @param input
 */
export function binToAscii(input: string) {
    let result = '';
    const arr = input.match(/.{1,8}/g);
    if (arr) {
        for (let i = 0; i < arr.length; i += 1) {
            result += String.fromCharCode(parseInt(arr[i], 2));
        }
        return result;
    }
    return CErrors.isEmptyError();
}

/**
 * Compares the likelyhood of being an english sentence
 * @param input
 */
export function englishScoring(input: string[]):string {
    let mostLikely: string = '';
    let currentScore: number = 0;
    input.forEach((elt) => {
        let score = 0;
        for (let i = 0; i < elt.length; i += 1) {
            const char = elt.charAt(i).toLowerCase();
            isNaN(CHAR_FREQ[char]) ? score += 0 : score += CHAR_FREQ[char];
        }
        if (score > currentScore) {
            mostLikely = elt;
            currentScore = score;
        }
    });
    return mostLikely;
}

/**
 * XOR one ascii byte to another ascii byte
 * @param char1
 * @param char2
 */
export function xorSingleByte(char1: string, char2: string) {
    CErrors.hasOnlyOneChar(char1);
    CErrors.hasSameLength(char1, char2);
    let bin1 = char1.charCodeAt(0).toString(2);
    let bin2 = char2.charCodeAt(0).toString(2);
    bin1 = '0'.repeat(8 - bin1.length) + bin1;
    bin2 = '0'.repeat(8 - bin2.length) + bin2;
    return xor(bin1, bin2);
}

/**
 * Turns bin string to hex string
 * @param bin
 */
export function binToHex(bin: string) {
    let buffer = '';
    StringUtils.chunkString(bin, 4)?.forEach((elt) => {
        buffer = buffer + BIN_TO_HEX[elt];
    });
    return buffer;
}

/**
 * Turns hex string to bin string
 * @param hex
 */
export function hexToBin(hex: string):string {
    const input = hex.toUpperCase();
    let buffer = '';
    for (let i = 0; i < input.length; i += 1) {
        const char = input.charAt(i);
        buffer = buffer + HEX_TO_BIN[char];
    }
    return buffer;
}

/**
 * Turns bin string to base 64 string
 * @param input
 */
export function binTo64(input: string):string {
    let buffer = '';
    StringUtils.chunkString(input, 6)?.forEach((elt) => {
        buffer = buffer + BIN_TO_BASE64[elt];
    });
    return buffer;
}

/**
 *
 */
export const BIN_TO_HEX: {[key:string]:any} = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    1000: '8',
    1001: '9',
    1010: 'A',
    1011: 'B',
    1100: 'C',
    1101: 'D',
    1110: 'E',
    1111: 'F',
};

/**
 *
 */
export const HEX_TO_BIN: {[key:string]:any} = {
    0: '0000',
    1: '0001',
    2: '0010',
    3: '0011',
    4: '0100',
    5: '0101',
    6: '0110',
    7: '0111',
    8: '1000',
    9: '1001',
    A: '1010',
    B: '1011',
    C: '1100',
    D: '1101',
    E: '1110',
    F: '1111',
};

/**
 *
 */
export const BIN_TO_BASE64: {[key:string]:any} = {
    '000000' : 'A',
    '000001' : 'B',
    '000010' : 'C',
    '000011' : 'D',
    '000100' : 'E',
    '000101' : 'F',
    '000110' : 'G',
    '000111' : 'H',
    '001000' : 'I',
    '001001' : 'J',
    '001010' : 'K',
    '001011' : 'L',
    '001100' : 'M',
    '001101' : 'N',
    '001110' : 'O',
    '001111' : 'P',
    '010000' : 'Q',
    '010001' : 'R',
    '010010' : 'S',
    '010011' : 'T',
    '010100' : 'U',
    '010101' : 'V',
    '010110' : 'W',
    '010111' : 'X',
    '011000' : 'Y',
    '011001' : 'Z',
    '011010' : 'a',
    '011011' : 'b',
    '011100' : 'c',
    '011101' : 'd',
    '011110' : 'e',
    '011111' : 'f',
    100000 : 'g',
    100001 : 'h',
    100010 : 'i',
    100011 : 'j',
    100100 : 'k',
    100101 : 'l',
    100110 : 'm',
    100111 : 'n',
    101000 : 'o',
    101001 : 'p',
    101010 : 'q',
    101011 : 'r',
    101100 : 's',
    101101 : 't',
    101110 : 'u',
    101111 : 'v',
    110000 : 'w',
    110001 : 'x',
    110010 : 'y',
    110011 : 'z',
    110100 : '0',
    110101 : '1',
    110110 : '2',
    110111 : '3',
    111000 : '4',
    111001 : '5',
    111010 : '6',
    111011 : '7',
    111100 : '8',
    111101 : '9',
    111110 : '+',
    111111 : '/',
};

export const CHAR_FREQ: {[key:string]:any} = {
    a: .08167,
    b: .01492,
    c: .02782,
    d: .04253,
    e: .12702,
    f: .02228,
    g: .02015,
    h: .06094,
    i: .06094,
    j: .00153,
    k: .00772,
    l: .04025,
    m: .02406,
    n: .06749,
    o: .07507,
    p: .01929,
    q: .00095,
    r: .05987,
    s: .06327,
    t: .09056,
    u: .02758,
    v: .00978,
    w: .02360,
    x: .00150,
    y: .01974,
    z: .00074,
    ' ': .13000,
};