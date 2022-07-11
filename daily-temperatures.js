/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = [Number.POSITIVE_INFINITY];
    const stack2 = [-1];
    const result = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        if (t < stack[stack.length - 1]) {
            stack.push(t);
            stack2.push(i);
        } else {
            while (t > stack[stack.length - 1]) {
                stack.pop();
                let index = stack2.pop();
                result[index] = i - index;
            }
            stack.push(t);
            stack2.push(i);
        }
        console.log(stack);
    }
    console.log(result);
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
