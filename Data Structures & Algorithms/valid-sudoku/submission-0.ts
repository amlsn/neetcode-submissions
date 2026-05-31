class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // row and col check
        const rowS = new Set<string>(), colS = new Set<string>(), sqS = new Set<string>();
        for (let i=0; i<9; ++i) {
            rowS.clear(); colS.clear(); sqS.clear();
            for (let j=0;j<9; ++j) {
                const boxI = Math.floor(i/3)*3+Math.floor(j/3),
                boxJ = Math.floor(j%3)+Math.floor(i%3)*3;
                const r:string = board[i][j], c:string=board[j][i],
                s:string = board[boxI][boxJ];
                console.log(boxI, boxJ);
                if (rowS.has(r)||colS.has(c)||sqS.has(s)) return false;
                if (r!='.') rowS.add(r);
                if (c!='.') colS.add(c);
                if (s!='.') sqS.add(s);
            }
        }
        return true;
    }
}
