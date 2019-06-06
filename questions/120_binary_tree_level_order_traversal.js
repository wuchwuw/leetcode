/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * } 
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let queue = []
  let ret = []
  queue.push({ node: root, level: 0 })
  while (queue.length !== 0) {
    let item = queue.shift()
    let node = item.node
    let level = item.level
    if (level === ret.length) {
      ret.push([])
    }
    ret[level].push(node.val)
    if (node.left) {
      queue.push({node: node.left, level: level + 1})
    }
    if (node.right) {
      queue.push({node: node.right, level: level + 1})
    }
  }
  return ret
};