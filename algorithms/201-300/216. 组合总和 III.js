/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let results = []
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function backtrace(count, sum, candicates) {
        if (k === count) {
            if (sum === n) {
                results.push([...candicates])
            }
            return
        } else if (count > k || sum > n) {
            return;
        }
        for (let num of nums) {
            if (candicates.length === 0 ||
                (num > candicates[candicates.length - 1] && candicates.indexOf(num) === -1)) {
                backtrace(count + 1, sum + num, [...candicates, num])
            }
        }
    }

    backtrace(0, 0, [])
    return results
};
