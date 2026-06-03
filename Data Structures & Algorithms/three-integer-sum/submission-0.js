class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        const len = nums.length;
        let res=[];
        for (let i=0; i<len-2; ++i) {
            if (i>0 && nums[i]==nums[i-1]) continue;
            let l=i+1, r = len-1;
            while (l<r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum==0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    ++l;
                    while (l<r && nums[l]==nums[l-1]) ++l;
                } else if (sum>0) {
                    --r;
                } else ++l;
            }
        }
        return res;
    }
}
