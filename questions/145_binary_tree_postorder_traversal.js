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
var postorderTraversal = function(root) {
  let arr = []
  postorder(root, arr)
  return arr
};

function postorder(node, arr) {
  if (node === null)
      return

  postorder(node.left, arr)
  postorder(node.right, arr)
  arr.push(node.val)
}