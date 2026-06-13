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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root==null && subRoot !=null) return false;
        if (this.isSameTree(root,subRoot) 
        || this.isSameTree(root.left, subRoot)
        || this.isSameTree(root.right, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(t1:TreeNode | null, t2:TreeNode | null): boolean {
        if (t1==null && t2 == null) return true;
        if (t1==null || t2 == null || t1.val!=t2.val) return false;
        return this.isSameTree(t1.left,t2.left) && this.isSameTree(t1.right, t2.right);
    }
}
