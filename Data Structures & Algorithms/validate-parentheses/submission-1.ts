class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack:string[] = [];
        const openToClose = new Map<string, string>([
            [']','['],
            ['}','{'],
            [')','('],
        ])
        for (let i=0; i<s.length; ++i) {
            const ch = s.charAt(i);
            if (ch=='['||ch=='{'||ch=='(') {
                stack.push(ch);
            } else {
                const top = stack.pop();
                if (top!=openToClose.get(ch)) return false;
            }
        }
        if (stack.length!=0) return false;
        return true;
    }
}
