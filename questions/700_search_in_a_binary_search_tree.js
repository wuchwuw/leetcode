/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  return search(root, val)
};

function search (node, val) {
  if (node === null) return null
  if (node.val > val) {
      node = search(node.left, val)
  } else if (node.val < val) {
      node = search(node.right, val)
  } else {
      return node
  }
  return node
}