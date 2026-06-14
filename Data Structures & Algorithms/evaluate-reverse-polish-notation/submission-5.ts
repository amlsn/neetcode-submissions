class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = new Array();
        for (let t of tokens) {
            if (t==="+" || t==="-" || t==="*" || t==="/") {
                const ele1 = stack.pop(), ele2=stack.pop();
                let res;
                switch (t) {
                    case "+": res = ele1+ele2; break;
                    case "-": res = ele2-ele1; break;
                    case "/": res = Math.trunc(ele2/ele1); break;
                    case "*": res = ele1*ele2; break;
                }
                stack.push(res);
                console.log(stack);
                continue;
            }
            stack.push(parseInt(t));
            console.log(stack);
        }
        return stack.pop();
    }
}
