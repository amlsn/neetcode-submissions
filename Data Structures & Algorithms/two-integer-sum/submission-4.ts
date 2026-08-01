class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const n = nums.length;
        const map = new Map<number, number>();
        for (let i=0; i<n; ++i) {
            const ele = nums[i];
            if (map.has(target-ele)) {
                return [map.get(target-ele),i];
            }
            if (!map.has(ele)) map.set(ele,i);
        }
        return [];
    }
}
