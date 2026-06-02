class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0, r = numbers.length;
        while (r>l) {
            let ln = numbers[l], rn = numbers[r];
            const sum = rn+ln;
            if (sum==target) return [l+1,r+1];
            if (sum<target) ++l; else --r;
        }
        return [];
    }
}
