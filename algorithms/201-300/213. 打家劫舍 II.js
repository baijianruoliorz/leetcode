/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    function max(nums) {
        let dp = new Array(nums.length)
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])
        for (let i = 2; i <= nums.length - 1; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        }
        return dp[nums.length - 1]
    }
    if (nums.length == 0) {
        return 0
    } else if (nums.length == 1) {
        return nums[0]
    } else if (nums.length == 2) {
        return Math.max(nums[0], nums[1])
    }

    let i = max(nums.slice(1, nums.length))
    let j = max(nums.slice(0, nums.length - 1))
    return Math.max(i, j)
};

let r = rob([1])
console.log(r)
