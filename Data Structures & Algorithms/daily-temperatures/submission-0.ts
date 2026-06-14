class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = new Array(), n = temperatures.length;
        const res = new Array(n).fill(0);
        for (let i=0; i<n; ++i) {
            if (stack.length===0) { stack.push(i); continue; }
            const curr=temperatures[i];
            while (stack.length>0 && curr>temperatures[stack[stack.length-1]]) {
                res[stack[stack.length-1]] = i-stack[stack.length-1];
                stack.pop();
            }
            stack.push(i);
        }
        return res;
    }
}
