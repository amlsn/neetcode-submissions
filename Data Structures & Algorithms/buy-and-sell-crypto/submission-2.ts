class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowestSoFar=prices[0], res=0;
        for (let i=1; i<prices.length; ++i) {
            res = Math.max(res, prices[i]-lowestSoFar);
            lowestSoFar = Math.min(lowestSoFar, prices[i]);
        }
        return res;
    }
}
