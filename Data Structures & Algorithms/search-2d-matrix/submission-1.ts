class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rowI = this.findRowViaBSearch(matrix, target);
        if (rowI==-1) return false;
        let l=0, r=matrix[0].length; 
        while (r>=l) {
            const mid = Math.floor((l+r)/2);
            if (matrix[rowI][mid]==target) return true;
            if (matrix[rowI][mid]<target) l=mid+1; else r=mid-1;
        } 
        return false;
    }

    findRowViaBSearch(mx:number[][], target:number): number {
        let l=0, r=mx.length-1;
        while (r>=l) {
            const mid = Math.floor((l+r)/2);
            const rowStart = mx[mid][0], rowEnd = mx[mid][mx[0].length-1];
            if (rowStart<=target && rowEnd >=target) return mid;
            if (rowEnd<target) l=mid+1; else r=mid-1;
        }
        return -1; // didn't find
    }
}
