class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // no-freq mapping
        const freq = new Map<number, number>();
        for (let i=0; i<nums.length; ++i) {
            const no:number = nums[i];
            if (!freq.has(no)) freq.set(no,0);
            freq.set(no,freq.get(no)+1);
        }
        // freq-nos
        const rev = new Map<number, number[]>();
        for (const [key,value] of freq) {
            if (!rev.has(value)) rev.set(value,[]);
            rev.get(value)!.push(key);
        }

        let kCounter:number = 0;
        // going through those values and adding them to resulting array
        let res:number[] = [];
        for (let i=nums.length; i>0; --i) {
            if (rev.has(i)) {
                let no = rev.get(i)!.pop();
                if (rev.get(i).length==0) rev.delete(i);
                res.push(no);
                if (++kCounter==k) return res;
                ++i;
            }
        }
        return res;
    }
}
