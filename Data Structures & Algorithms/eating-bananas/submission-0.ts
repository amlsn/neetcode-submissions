class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1,right=Math.max(...piles);
        let res = right;
        while (left<=right) {
            const mid = Math.floor((left+right)/2);
            // console.log(mid, this.canComplete(mid, h, piles));
            if (this.canComplete(mid, h, piles)) {
                res = mid;
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
        return res;
    }

    canComplete(k:number, h:number, piles:number[]):boolean {
        let _h=0;
        for (let i=0; i<piles.length; ++i) {
            _h+=Math.ceil(piles[i]/k);
            if (_h>h) return false;
        }
        return true;
    }
}
