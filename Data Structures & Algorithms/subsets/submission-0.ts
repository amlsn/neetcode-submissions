class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];
        const subset:number[] = [];
        const dfs = (index:number):void => {
            if (index>=nums.length) {
                res.push(subset.slice());
                return;
            }
            
            subset.push(nums[index]);
            dfs(index+1);

            subset.pop();
            dfs(index+1);
        }
        dfs(0);

        return res;
        
    }
}
