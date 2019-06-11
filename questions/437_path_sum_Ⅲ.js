/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root === null) return 0
  let res = findPath(root, sum)
  res += pathSum(root.left, sum)
  res += pathSum(root.right, sum)

  return res
};

function findPath (node, sum) {
  if (node === null) return 0
  let res = 0
  if (node.val === sum) {
    res += 1
  }

  res += findPath(node.left, sum - node.val)
  res += findPath(node.right, sum - node.val)

  return res
}