/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let res = {
      count: 0
  }
  sum(root, L, R, res)
  return res.count
};

function sum (node, L, R, res) {
  if (node === null) return
  if (node.val <= R && node.val >= L) {
      res.count += node.val
  }
  sum(node.left, L, R, res)
  sum(node.right, L, R, res)
}