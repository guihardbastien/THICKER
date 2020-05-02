/**
 * Chunks string into bits of <length>
 * @param str
 * @param length
 */
export function chunkString(str: string, length: number) {
    return str.match(new RegExp(`.{1,${length}}`, 'g'));
}