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
     * @return {void}
     */
     reorderList(head: ListNode | null): void {
    // Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // Break the list into two halves
    slow.next = null;
    
    // Merge the two halves
    let first = head;
    let second = prev;
    while (second) {
        let next1 = first.next;
        let next2 = second.next;
        
        first.next = second;
        second.next = next1;
        
        first = next1;
        second = next2;
    }
}
}
