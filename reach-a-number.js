/**
 * 这题有点坑，以下代码不对，略过
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    target = Math.abs(target);
    let root = (-1 + Math.sqrt(1 + target * 8)) / 2;
    if (Math.abs(Math.floor(root) - root) < 0.00001) {
        return Math.floor(root);
    }
    return target;
};

console.log(reachNumber(11));