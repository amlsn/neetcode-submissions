class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let r:number = s.length-1, l=0; 
        while (r>l) {
            let rc:string=s.charAt(r).toLowerCase();
            let lc:string=s.charAt(l).toLowerCase();
            if (!/^[a-z0-9]+$/.test(rc)) { --r; continue; }
            if (!/^[a-z0-9]+$/.test(lc)) { ++l; continue; }
            if (rc!=lc) return false;
            --r; ++l;
        }
        return true;
    }
}
