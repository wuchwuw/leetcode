/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  return rob1(nums, 0)
};

function rob1 (nums, index) {
  if (index >= nums.length) {
    return 0
  }
  let res = 0
  for(let i = index; i < nums.length; i ++) {
    res = Math.max(res, nums[i] + rob1(nums, index + 2))
  }
  return res
}