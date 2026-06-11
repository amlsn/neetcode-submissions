/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let res = null;
        while (head!=null) {
            let temp = new ListNode(head.val, res);
            res = temp;
            head=head.next;
        }
        return res;
    }
}
