class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const res = 0;
        const dpVals = new Array(cost.length+1).fill(-1);
        // dp() will return min cost of reaching that step
        // si = step index
        dpVals[0]=0; dpVals[1]=0;
        const dp = (si:number): number => { 
            if (dpVals[si]!=-1) return dpVals[si];
            dpVals[si] = Math.min(dp(si-2)+cost[si-2],dp(si-1)+cost[si-1]);
            return dpVals[si];
        }
        dp(cost.length);
        return dpVals[cost.length];
    }
}
