class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length ==0 ) return 0;
        nums.sort((a,b)=>a-b);
        console.log(nums);
        let res =0, locRes=1;
        for (let i=1; i<nums.length; ++i) {
            if (nums[i]-nums[i-1]==1) {
                locRes++;
                console.log('t',i,locRes,res,nums[i],nums[i-1]);
            }
            else {
                if (nums[i]==nums[i-1]) {
                    console.log('p',i,locRes,res,nums[i],nums[i-1]);
                    continue;
                }
                if (locRes>res) {
                    res=locRes;
                    console.log('l',i,locRes,res,nums[i],nums[i-1]);
                }
                locRes =1;
            }
        }
        if (locRes>res) res = locRes;
        return res;
    }
}
