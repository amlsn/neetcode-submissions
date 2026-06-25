class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let res = 0;
        const freq = new Array(26).fill(0);

        for (let r = 0; r < s.length; r++) {

            // ??? add s[r]
            freq[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;

            while ((r - l + 1) - this.getMaxFreq(freq) > k) {
                freq[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
                l++;
            }

            // ??? update res
            res = Math.max(res, r - l + 1);
        }
        return res;
    }

    getMaxFreq(freq: number[]): number {
        let maxFreq = 0;
        for (let i = 0; i < freq.length; i++) {
            maxFreq = Math.max(maxFreq, freq[i]);
        }
        return maxFreq;
    }
}
