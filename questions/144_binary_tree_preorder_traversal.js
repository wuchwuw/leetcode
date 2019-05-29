/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let arr = []
  preorder(root, arr)
  return arr
};

function preorder(node, arr) {
  if (node === null)
      return
  
  arr.push(node.val)
  preorder(node.left, arr)
  preorder(node.right, arr)
}