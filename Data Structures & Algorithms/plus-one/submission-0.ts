class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let carry:number = 1;
        for (let i=digits.length-1; i>=0; --i) {
            let nD = digits[i] + carry;
            // console.log(digits[i], nD, digits[i]%10);
            if (nD<10) {
                digits[i]=nD; carry=0; break;
            }
            digits[i]=nD%10; carry=1;
        }
        if (carry==1) digits.unshift(1);
        return digits;
    }
}
