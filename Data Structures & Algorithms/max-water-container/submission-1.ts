class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let len:number = heights.length;
        let l=0, r = len-1;
        let res =0;
        while (l<r) {
            const lh = heights[l], rh = heights[r];
            res = Math.max(res, Math.min(lh,rh)*(r-l));
            if (lh==rh || lh<rh) ++l; else --r;
        }
        return res;
    }
}
