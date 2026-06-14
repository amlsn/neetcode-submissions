class MinStack {
    actualArr = new Array();
    minArr = new Array();
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.actualArr.push(val);
        if (this.minArr.length===0 || this.minArr[this.minArr.length-1]>=val) this.minArr.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.minArr[this.minArr.length - 1] === this.actualArr[this.actualArr.length - 1]) {
            this.minArr.pop();
        }
        this.actualArr.pop();
        if (this.minArr.length === 0 && this.actualArr.length != 0)
            this.minArr.push(this.actualArr[this.actualArr.length - 1]);
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.actualArr[this.actualArr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minArr[this.minArr.length - 1];
    }
}
