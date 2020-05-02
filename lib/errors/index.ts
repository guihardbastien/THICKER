/**
 * TODO: write doc
 * @param input1
 * @param input2
 */
export function hasSameLength(input1 :string, input2: string) {
    if (input1.length !== input2.length) {
        throw Error('LENGTH_ERROR: should be of same length');
    }
    return;
}

/**
 * only one char error
 * @param input1
 */
export function hasOnlyOneChar(input1 :string) {
    if (input1.length !== 1) {
        throw Error('LENGTH_ERROR: should be one char only');
    }
    return;
}

/**
 * Empty error
 */
export function isEmptyError() {
    throw Error('LENGTH_ERROR: empty array');
}

/**
 * Length error
 * @param str
 * @param l
 */
export function checkLength(str: string, l: number) {
    if (str.length !== l) {
        throw Error('LENGTH_ERROR: wrong input length');
    }
}