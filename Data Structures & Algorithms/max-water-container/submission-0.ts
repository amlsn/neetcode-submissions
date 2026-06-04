class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let len:number = heights.length;
        let res = 0, locRes = 0;
        for (let i=0; i<len-1; ++i) {
            for (let j=i+1; j<len; ++j) {
                locRes = Math.min(heights[i], heights[j]) * (j-i);
                res = Math.max(res, locRes);
            }
        }
        return res;
    }
}
