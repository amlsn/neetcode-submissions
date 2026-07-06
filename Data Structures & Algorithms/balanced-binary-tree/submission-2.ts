/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
       if (root==null) return true;
        const hdiff = this.getHeight(root.left) - this.getHeight(root.right);
        if (hdiff>=-1&&hdiff<=1) return this.isBalanced(root.left)&&this.isBalanced(root.right);
        return false;
        
    }

    getHeight(root):number {
        if (root==null) return 0;
        return 1+Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
}
