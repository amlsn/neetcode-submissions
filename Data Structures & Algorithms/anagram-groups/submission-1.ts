class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // charactermap (a0b2..) to index of strs map
        const map = new Map<string, number[]>();
        for (let i = 0; i < strs.length; ++i) {
            let curr: string = strs[i];
            let strMap: string = this.getCharMap(curr);
            if (!map.has(strMap)) {
                map.set(strMap, []);
            }
            map.get(strMap)!.push(i);
            // else {map.set()}
        }
        let resp: string[][] = [];
        for (const [key, value] of map) {
            let r: string[] = [];
            for (let i = 0; i < value.length; ++i) {
                let s = strs[value[i]];
                console.log("s", s);
                r.push(s);
                console.log("r", r);
            }
            resp.push(r);
        }
        return resp;
    }

    getCharMap(str: string): string {
        let resp: string = "";
        let charCount: number[] = new Array(26).fill(0);
        for (let i = 0; i < str.length; ++i) {
            let ch = str.charAt(i);
            const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
            charCount[idx]++;
        }
        for (let i: number = 0; i < 26; ++i) {
            let ch: string = String.fromCharCode("a".charCodeAt(0) + i);
            resp += ch + String(charCount[i]);
        }
        return resp;
    }
}
