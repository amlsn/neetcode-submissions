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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (head==null) return false;
        let slow = head, fast = slow.next;
        while (fast!=null) {
            if (slow.val==fast.val) return true;
            slow = slow.next;
            fast = fast.next; if (fast==null) break; fast = fast.next;
        }
        return false;
    }
}
