/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = []
  if (root === null) return res
  if (root.left === null && root.right === null) {
    res.push(String(root.val))
    return res
  }

  let resL = binaryTreePaths(root.left)
  for (let i = 0; i < resL.length; i ++) {
    res.push(`${root.val}->${resL[i]}`)
  }
  let resR = binaryTreePaths(root.right)
  for (let i = 0; i < resR.length; i ++) {
    res.push(`${root.val}->${resR[i]}`)
  }

  return res
};