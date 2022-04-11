// 回溯的实现方式
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [[]];

    let item = [];
    /**
     * @param {number} num 
     */
    const choose = (array, num) => {
        if (num > 0) {
            let last = item[item.length - 1] === undefined ? -11 : item[item.length - 1];
            for (let i = 0; i < array.length; i++) {
                let element = array[i];
                if (element < last) {
                    continue;
                }
                item.push(element);
                let rest = [...array];
                rest.splice(i, 1);
                choose(rest, num - 1);
                item.pop();
            }
        } else {
            result.push([...item]);
        }
    };
    for (let i = 1; i <= nums.length; i++) {
        choose(nums, i);
    }
    return result;
};

console.log(subsets([-1, 0]));
