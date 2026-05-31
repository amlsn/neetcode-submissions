class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let pre:number[] =[], post:number[] = [];
        const l:number = nums.length;
        pre[0] = nums[0]; post[l-1]=nums[l-1];
        for (let i=1; i<l; ++i) {
            pre[i] = pre[i-1] * nums[i];
            post[l-1-i] = post[l-1-i+1] * nums[l-1-i];
        }
        let res:number[] = new Array(l);
        res[0] = post[1];
        res[l-1]=pre[l-2];
        for (let i=1; i<l-1; ++i) {
            res[i]=pre[i-1]*post[i+1];
        }
        return res;
    }
}
