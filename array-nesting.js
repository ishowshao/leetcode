/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    const visited = Array(nums.length).fill(0);
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (visited[i]) {
            continue;
        }
        let path = 1;
        let num = nums[i];
        visited[i] = 1;
        while (true) {
            if (visited[num]) {
                break;
            }
            visited[num] = 1;
            num = nums[num];
            path++;
        }
        max = Math.max(path, max);
    }
    return max;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
