class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        [position,speed] = this.doubleSort(position, speed);
        console.log(position,speed);
        // 0:1,4    1:4,6   2:7,8   3:10,10
        // 0:0(~1),1(~2),4(~2),7(~1)    1:1,3,6,8   2:2,5,6,8   3:3,7,8,9   4:4,9,10,10
        let timeToBeat = -1, resFleets=0;
        for (let i=0; i<position.length; ++i) {
            // let time = Math.ceil((target-position[i])/speed[i]);
            let time = (target-position[i])/speed[i];
            if (timeToBeat==-1) { timeToBeat=time; resFleets++; } // last pos car
            if (timeToBeat!=-1 && time<=timeToBeat) {
                // add to current fleet. no increment in res value
                continue;
            }
            if (timeToBeat!=-1 && time>timeToBeat) {
                console.log(i,time,timeToBeat);
                resFleets++; timeToBeat=time;
            } 
        }
        return resFleets;
    }

    doubleSort(primary:number[], secondary:number[]): number[][] {
        const combined = primary.map((value,index)=>({value, secondaryVal:secondary[index]}))
            .sort((a,b)=>(b.value-a.value));
        const sortedPrimary = combined.map(item=>item.value);
        const sortedSecondary = combined.map(item=>item.secondaryVal);
        return [sortedPrimary, sortedSecondary];
    }
}
