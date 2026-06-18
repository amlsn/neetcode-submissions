class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let xor=0;
        for (let i=0; i<nums.length; ++i) {
            xor^=(i+1);
            xor^=nums[i];
        }
        return xor;
    }
}
