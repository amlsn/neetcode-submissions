class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0, right = nums.length - 1;
        let res = nums[0];

        while (left <= right) {
            // Current window is already sorted
            if (nums[left] <= nums[right]) {
                res = Math.min(res, nums[left]);
                break;
            }

            const mid = Math.floor((left + right) / 2);
            const l = nums[left];
            const r = nums[right];
            const e = nums[mid];

            res = Math.min(res, e);

            if (e > r) {
                // Minimum must be to the right
                left = mid + 1;
            } else {
                // Minimum is at mid or to the left
                right = mid - 1;
            }
        }

        return res;
    }
}