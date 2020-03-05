/**
 * 
 */
export function hexToBin(hex: string) {
    const input = hex.toUpperCase();
    let buffer = "";
    for (var i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        buffer = buffer + HEX_TO_BIN[char];
      } 
    return buffer
}

/**
 * 
 */
export function xor(bin1: string, bin2: string) {
    if (bin1.length !== bin2.length){
        throw Error ("Cannot xor input with different lengths")
    }
    let buffer = "";
    for (var i = 0; i < bin1.length; i++) {
        const char1 = parseInt(bin1.charAt(i));
        const char2 = parseInt(bin2.charAt(i));
        const xored = char1^char2
        buffer = buffer + xored;
      } 
    return buffer;
}

/**
 * 
 */
export function padding(input: string) {
    if (input.length % 6 === 2 ){
        return '0000' + input ;
    }
    if (input.length % 6 === 4 ){
        return '00' + input ;
    }
    return input; 
}

/**
 * 
 */
export const BIN_TO_HEX: {[key:string]:any} = {
    "0000": "0",
	"0001": "1",
	"0010": "2",
	"0011": "3",
	"0100": "4",
	"0101": "5",
	"0110": "6",
	"0111": "7",
	"1000": "8",
	"1001": "9",
	"1010": "A",
	"1011": "B",
	"1100": "C",
	"1101": "D",
	"1110": "E",
	"1111": "F"
};

/**
 * 
 */
export const HEX_TO_BIN: {[key:string]:any} = {
    "0": "0000",
	"1": "0001",
	"2": "0010",
	"3": "0011",
	"4": "0100",
	"5": "0101",
	"6": "0110",
	"7": "0111",
	"8": "1000",
	"9": "1001",
	"A": "1010",
	"B": "1011",
	"C": "1100",
	"D": "1101",
	"E": "1110",
	"F": "1111"
};

/**
 * 
 */
export const BIN_TO_BASE64: {[key:string]:any} = {
    "000000" : "A",
    "000001" : "B",
    "000010" : "C",
    "000011" : "D",
    "000100" : "E",
    "000101" : "F",
    "000110" : "G",
    "000111" : "H",
    "001000" : "I",
    "001001" : "J",
    "001010" : "K",
    "001011" : "L",
    "001100" : "M",
    "001101" : "N",
    "001110" : "O",
    "001111" : "P",
    "010000" : "Q",
    "010001" : "R",
    "010010" : "S",
    "010011" : "T",
    "010100" : "U",
    "010101" : "V",
    "010110" : "W",
    "010111" : "X",
    "011000" : "Y",
    "011001" : "Z",
    "011010" : "a",
    "011011" : "b",
    "011100" : "c",
    "011101" : "d",
    "011110" : "e",
    "011111" : "f",
    "100000" : "g",
    "100001" : "h",
    "100010" : "i",
    "100011" : "j",
    "100100" : "k",
    "100101" : "l",
    "100110" : "m",
    "100111" : "n",
    "101000" : "o",
    "101001" : "p",
    "101010" : "q",
    "101011" : "r",
    "101100" : "s",
    "101101" : "t",
    "101110" : "u",
    "101111" : "v",
    "110000" : "w",
    "110001" : "x",
    "110010" : "y",
    "110011" : "z",
    "110100" : "0",
    "110101" : "1",
    "110110" : "2",
    "110111" : "3",
    "111000" : "4",
    "111001" : "5",
    "111010" : "6",
    "111011" : "7",
    "111100" : "8",
    "111101" : "9",
    "111110" : "+",
    "111111" : "/"
};