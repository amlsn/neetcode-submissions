class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let n=height.length;
        let l=0, r=n-1;
        let area =0;
        let ml = new Array(n).fill(0), mr= new Array(n).fill(0);//prefix sum left and right
        ml[0]=height[0]; mr[n-1]=height[n-1];
        for (let i=1; i<n; ++i) {
            ml[i]=Math.max(ml[i-1],height[i]); mr[n-1-i]=Math.max(mr[n-i],height[n-1-i]);
        }
        for (let i=0; i<n; ++i) {
            area += Math.min(ml[i], mr[i]) - height[i];
        }
        return area;
    }
}
