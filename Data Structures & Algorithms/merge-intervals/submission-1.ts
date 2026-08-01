class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        let res = [];
        intervals = intervals.sort((a,b)=>a[0]-b[0]);
        res.push(intervals[0]);
        for (let i=1; i<intervals.length; ++i) {
            const n = res.length;
            if (this.iOl(res[n-1][0],res[n-1][1],intervals[i][0],intervals[i][1])) {
                const last = res.pop();
                res.push(this.gMR(last[0],last[1],intervals[i][0],intervals[i][1]));
            } else {
                res.push(intervals[i]);
            }
        }
        return res;
    }

    iOl(a,b,x,y):boolean { //isOverlapping
        if (b<x || y<a) return false;
        return true;
    }

    gMR(a,b,x,y):number[] { //getMaxRange
        return [Math.min(a,x), Math.max(b,y)];
    }
}
