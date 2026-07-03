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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;
        
        const dfs = (node: TreeNode | null): number => {
            if (node==null) return 0;
            
            const leftDepth = dfs(node.left);
            const rightDepth = dfs(node.right);
            
            // Update diameter if path through current node is longer
            diameter = Math.max(diameter, leftDepth + rightDepth);
            
            // Return depth of current node
            return Math.max(leftDepth, rightDepth) + 1;
        };
        
        dfs(root);
        return diameter;
    }
}
