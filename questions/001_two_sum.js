/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let l = nums.length
  for (let i = 0; i < l - 1; i++) {
      for (let j = i + 1; j < l; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

var twoSum = function(nums, target) {
  let record = new Map()
  for (let i = 0; i < nums.length; i ++) {
    let diff = target - nums[i]
    if (record.has(diff)) {
      return [record.get(diff), i]
    } else {
      record.set(nums[i], i)
    }
  }
}