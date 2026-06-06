class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let l=0, res=0;
        for (let r=0; r<s.length; ++r) {
            const ch = s.charAt(r);
            while (l<r && set.has(ch)) {
                set.delete(s.charAt(l++));
            }
            console.log(set,l,r);
            res = Math.max(res, r-l+1);
            set.add(ch);
        }
        return res;
    }
}
