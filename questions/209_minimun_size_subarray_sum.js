/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let l = 0; r = -1, sum = 0, res = nums.length + 1
    while (l < nums.length) {
      if (r + 1 < nums.length && s > sum) {
        r++
        sum += nums[r]
      } else {
        sum -= nums[l]
        l++
      }
      if (sum >= s) {
        res = Math.min(res, r - l + 1)
      }
    }
    if (res === nums.length + 1) return 0

    return res
};