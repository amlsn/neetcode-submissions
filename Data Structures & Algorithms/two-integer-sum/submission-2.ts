class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const no2IdxM = new Map<number, number[]>();
        for (let i=0; i<nums.length; ++i) {
            const currNo = nums[i];
            if (!no2IdxM.has(currNo)) no2IdxM.set(currNo, []);
            no2IdxM.set(currNo, [...no2IdxM.get(currNo),i]);
        }
        for (let i=0; i<nums.length; ++i) {
            const currNo = nums[i];
            const reqNo = target-currNo;
            if (no2IdxM.has(reqNo)) {
                if (currNo == reqNo)
                if (no2IdxM.get(currNo).length<2) continue; else return [i, no2IdxM.get(reqNo)[1]];
                return [i, no2IdxM.get(reqNo)[0]];
            }
        }
        return [0,0];
    }
}
