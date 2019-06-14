/**
 * @param {number[]} nums
 * @return {number}
 */ 
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0
  let m = new Array(nums.length).fill(1)
  for (let i = 1, l = nums.length; i < l; i ++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        m[i] = Math.max(m[j] + 1, m[i])
      }
    }
  }
  return Math.max(...m)
};