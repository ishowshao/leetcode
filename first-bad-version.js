/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        const search = (i, j) => {
            const mid = Math.floor((i + j) / 2);
            if (!isBadVersion(mid - 1) && isBadVersion(mid)) {
                return mid;
            }
            if (isBadVersion(mid - 1)) {
                return search(i, mid - 1);
            } else {
                return search(mid + 1, j);
            }
        };
        return search(1, n);
    };
};
