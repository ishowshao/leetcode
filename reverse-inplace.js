for (let i = position, j = nums.length - 1; i < j; i++, j--) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp; 
}