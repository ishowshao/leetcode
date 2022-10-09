/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.').map(str => Number(str));
    const v2 = version2.split('.').map(str => Number(str));
    let len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        let a = v1[i];
        let b = v2[i];
        if (a === undefined || b === undefined) {
            if (a === undefined) {
                a = 0;
            }
            if (b === undefined) {
                b = 0;
            }
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    }
    return 0;
};
