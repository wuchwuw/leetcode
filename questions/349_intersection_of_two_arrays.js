/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let record = new Set(nums1)
    let ret = new Set()
    nums2.forEach(item => {
      if (record.has(item)) {
        ret.add(item)
      }
    })
    return Array.from(ret)
};