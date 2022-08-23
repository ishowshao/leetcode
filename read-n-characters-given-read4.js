/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let r = 0;
        let buf4 = [];
        do {
            rd = read4(buf4);
            for (let i = 0; i < rd && r < n; i++, r++) {
                buf[r] = buf4[i];
            }
        } while (rd > 0 && r < n)
        return r;
    };
};
