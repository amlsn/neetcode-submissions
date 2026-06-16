class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let resArea=0, n=heights.length;
        for (let i=0; i<n; ++i) {
            let minHeight = heights[i], localArea = 0;
            for (let j=i; j<n; ++j) {
                minHeight = Math.min(minHeight, heights[j]);
                let area = minHeight * (j-i+1);
                localArea = Math.max(localArea, area);
            }
            resArea = Math.max(resArea, localArea);
        }
        return resArea;
    }
}
