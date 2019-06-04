/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let d = new ListNode(0)
  d.next = head
  let p = d
  while (p.next && p.next.next) {
    let node1 = p.next
    let node2 = node1.next
    let next = node2.next
    
    node2.next = node1
    node1.next = next
    p.next = node2
    p = node1
  }
  return d.next
};