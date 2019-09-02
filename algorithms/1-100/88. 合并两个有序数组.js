/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let i = m - 1, j = n - 1
    let pos
    for (pos = m + n - 1; i >= -1 && j >= 0; pos--) {

        if (nums1[i] >= nums2[j]) {
            nums1[pos] = nums1[i]
            i--
        } else {
            nums1[pos] = nums2[j]
            j--
        }
    }
};

nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6], n = 3
// nums1 = [0], m = 0
// nums2 = [1], n = 1


let r = merge(nums1, m, nums2, n)
