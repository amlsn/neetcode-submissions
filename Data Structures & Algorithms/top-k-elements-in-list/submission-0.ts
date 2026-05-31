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
        let freqArr:number[] = [];
        for (const [key,value] of freq) {
            if (!rev.has(value)) rev.set(value,[]);
            rev.get(value)!.push(key);
            freqArr.push(value);
        }
        // desc order sort of frequency values
        freqArr.sort((a,b)=>b-a);

        // going through those values and adding them to resulting array
        let res:number[] = [];
        for (let i=0; i<k; ++i) {
            let freq = freqArr[i];
            let no = rev.get(freq)!.pop();
            if (rev.get(freq).length==0) rev.delete(freq);
            res.push(no);
        }
        return res;
    }
}
