class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length ==0 ) return 0;
        const max = Math.max(...nums);
        const min = Math.min(...nums);
        let arr = new Array(max-min+1).fill(false);
        for (let num of nums) {
            arr[num-min] = true;
        }
        let res = 0, locRes =1;
        console.log(arr);
        for (let i=0; i<=max-min+1; ++i) {
            if (arr[i] && arr[i-1]) {
                locRes++;
            }
            else {
                res = Math.max(res, locRes);
                locRes=1;
            }
        }
        res = Math.max(res, locRes);
        return res;
    }
}
