/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let record = new Map()
  let ret = []
  nums1.forEach(item => {
    if (!record.has(item)) {
      record.set(item, 1)
    } else {
      let i = record.get(item)
      record.set(item, ++i)
    }
  })
  nums2.forEach(item => {
    if (record.has(item) && record.get(item) > 0) {
      ret.push(item)
      let i = record.get(item)
      record.set(item, --i)
    }
  })
  return ret
};