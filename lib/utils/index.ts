import * as Errors from '../errors';

/**
 * TODO: write doc
 * @param input1
 * @param input2
 */
export function hasSameLength(input1 :string, input2: string) {
    if (input1.length !== input2.length) {
        Errors.LENGTH_ERROR;
    }
    return;
}

/**
 * Empty error
 */
export function isEmpty() {
    Errors.LENGTH_ERROR;
}

/**
 * checks string length
 * @param str
 * @param l
 */
export function checkLength(str: string, l: number) {
    if (str.length !== l) {
        Errors.LENGTH_ERROR;
    }
}