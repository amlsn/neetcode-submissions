class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l=0, r=nums.length-1, m=0;
        while (l<=r) {
            m = Math.floor((l+r)/2);
            if (nums[m]===target) return m;
            if (nums[l]<=nums[m]) {
                // left half is sorted, search here
                if (nums[l]<=target && target<nums[m]) r=m-1;  // within l and m
                else l=m+1; // remove left side from search space
            } else {
                if (nums[m]<target && target<=nums[r]) l=m+1// within m and r
                else r=m-1; // remove right side from search space
            }
        }
        return -1;
    }
}
