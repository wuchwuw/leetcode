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
var inorderTraversal = function(root) {
  let arr = []
  inorder(root, arr)
  return arr
};


function inorder (node, arr) {
  if (node === null) {
      return
  }
  inorder(node.left, arr)
  arr.push(node.val)
  inorder(node.right, arr) 
}