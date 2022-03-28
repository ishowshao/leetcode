/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let map = new Map();
    let top = Math.max(...height);
    // for (let i = 0; i < height.length; i++) {
    //     let h = height[i];
    //     if (!map.has(h)) {
    //         map.set(h, [i]);
    //     } else {
    //         map.get(h).push(i);
    //     }
    //     if (h > top) {
    //         top = h;
    //     }
    // }

    // console.log(map, top);
    let area = 0;
    for (let h = 1; h <= top; h++) {
        let left, right;
        for (left = 0; left < height.length; left++) {
            if (height[left] >= h) {
                break;
            }
        }
        for (right = height.length - 1; right > 0; right--) {
            if (height[right] >= h) {
                break;
            }
        }
        console.log(h, left, right);
        area = Math.max(h * (right - left), area);
    }
    console.log(area);


    // return area;
    return area;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))