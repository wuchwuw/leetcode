/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  let used = new Array(nums.length).fill(false)
  permute1(nums, 0, [], res, used)
  return res
};

function permute1 (nums, index, p, res, used) {
  if (nums.length === index) {
    res.push(p.slice())
    return
  }
  for(let i = 0; i < nums.length; i ++) {
    if (!used[i]) {
      p.push(nums[i])
      used[i] = true
      permute1(nums, index + 1, p, res, used)
      p.pop()
      used[i] = false
    }
  }
  return
}