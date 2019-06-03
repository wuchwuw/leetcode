/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let l = 0
    let map = new Map()
    for (let i = 0; i < nums.length; i ++) {
      if (i - l > k) {
        map.delete(nums[l])
        l ++
      }
      if (map.has(nums[i])) {
        return true
      } else {
        map.set(nums[i], 1)
      }
    }
    return false
};