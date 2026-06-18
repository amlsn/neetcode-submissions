class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arr:number[] = new Array();
    climbStairs(n: number): number {
        if (n<=3) return n;
        if (this.arr[n]) return this.arr[n];
        this.arr[n] = this.climbStairs(n-1)+this.climbStairs(n-2);
        return this.arr[n];
    }
}
