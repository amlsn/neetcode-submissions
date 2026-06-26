class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let l=0, r=0;
        if (s1.length > s2.length) return false;
        const dist = this.getDistribution(s1);
        // idea is that we remove the window chars from dist, and use that to check if s1 chars are covered
        for (let i=0; i<s1.length; ++i) {
            dist[s2.charCodeAt(i)-'a'.charCodeAt(0)]--;
        }
        if (this.conditionSatisfied(dist)) return true;
        for (let i=s1.length; i<s2.length; ++i) {
            dist[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]++;
            dist[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
            if (this.conditionSatisfied(dist)) return true;
        }
        return false;
    }

    getDistribution(s:string): Array<number> { // O(1)
        const arr = new Array<number>(26).fill(0);
        for (let i=0; i<s.length; ++i) {
            arr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        }
        return arr;
    }

    conditionSatisfied(arr:Array<number>): boolean { // O(1) 
        // ?? are there any edge cases / silly missed out cases from this kinda check
        for (let i=0; i<26; ++i) {
            if (arr[i]!=0) return false;
        }
        return true;
    }
}
