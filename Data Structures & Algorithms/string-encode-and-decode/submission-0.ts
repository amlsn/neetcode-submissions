class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res='';
        for (let str of strs) {
            res+=str+String.fromCharCode(256);
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res:string[] = [];
        let t = '';
        for (let i=0; i<str.length; ++i) {
            if (str.charAt(i)==String.fromCharCode(256)) {
                res.push(t);
                t ='';
            }
            else t+=str.charAt(i);
        }
        return res;
    }
}
