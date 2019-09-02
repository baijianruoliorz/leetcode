/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let min = nums[0], max = nums[0]
    let result = max
    for (let i = 1; i < nums.length; i++) {
        let arr = [min * nums[i], max * nums[i], nums[i]]
        min = Math.min(...arr)
        max = Math.max(...arr)
        result = Math.max(max, result)
    }
    return result
};

nums = [2, 3, -2, 4]
let re = maxProduct(nums)
console.log(re)
