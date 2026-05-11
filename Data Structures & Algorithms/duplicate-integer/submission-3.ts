class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let trackingSet = new Set<number>;
        for (let i=0;i<nums.length;++i) {
            if (trackingSet.has(nums[i])) return true;
            trackingSet.add(nums[i]);
        }
        return false;
    }
}
