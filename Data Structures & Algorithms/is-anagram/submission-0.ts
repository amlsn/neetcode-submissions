class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        var map = new Map<string, number>();
        for (let i=0; i<s.length; ++i) {
            let ch = s.charAt(i);
            if (map.get(ch) === undefined) map.set(ch,1);
            else map.set(ch, map.get(ch)+1);
        }
        for (let i=0; i<t.length; ++i) {
            let ch = t.charAt(i);
            if (!map.has(ch) || map.get(ch)==0) return false;
            map.set(ch, map.get(ch)-1);
            if (map.get(ch)==0) map.delete(ch);
        }
        if (map.size!=0) return false;
        return true;
    }
}
