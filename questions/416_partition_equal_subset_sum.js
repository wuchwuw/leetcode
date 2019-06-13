/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i ++) {
    sum += nums[i]
  }
  if (sum % 2) {
    return false
  }
  let n = nums.length
  let c = sum / 2
  let m = []
  for (let i = 0; i < n; i ++) {
    m[i] = []
    for (let j = 0; j <= c; j ++) {
      m[i][j] = false
    }
  }

  for (let i = 0; i <= c; i ++) {
    if (nums[0] === i) {
      m[0][i] = true
    }
  }

  for (let i = 1; i < n; i ++) {
    for (let j = 0; j <= c; j ++) {
      m[i][j] = m[i - 1][j]
      if (j >= nums[i]) {
        m[i][j] = m[i - 1][j - nums[i]] 
      }
    }
  }
  return m[n - 1][c]
};