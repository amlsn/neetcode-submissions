class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        for (let i=0; i<nums.length; ++i) {
            let currNo:number = nums[i];
            let targetNo:number = target-currNo;
            let tNoIdx = seen.get(targetNo);
            if (tNoIdx!=undefined) {
                if (tNoIdx<i) return [tNoIdx,i]; else return [i, tNoIdx];
            }
            seen.set(currNo, i);
        }
        return [];
    }
}
