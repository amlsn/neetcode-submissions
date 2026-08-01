class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums: number[], target: number): number[] {
        let l=0, r=nums.length-1;
        let left = -1;
        while (l<=r) {
            const mid = Math.floor((l+r)/2);
            const ele = nums[mid];
            if (ele<target) {
                l=mid+1;
            } else if (ele>target) {
                r=mid-1;
            } else if (ele==target) { left=mid; 
                if (mid-1>=0 && ele>nums[mid-1]) break;
                else r=mid-1;
            }
        }
        l=0, r=nums.length-1;
        let right = -1;
        while (l<=r) {
            const mid = Math.floor((l+r)/2);
            const ele = nums[mid];
            if (ele<target) {
                l=mid+1;
            } else if (ele>target) {
                r=mid-1;
            } else if (ele==target) { right=mid; 
                if (mid+1<nums.length && ele<nums[mid+1]) break;
                else l=mid+1;
            }
        }
        return [left,right];
    }
}
