/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size;
    this.store = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.store.push(val);
    if (this.store.length > this.size) {
        this.store.shift();
    }
    let sum = 0;
    for (let i = 0; i < this.store.length; i++) {
        sum += this.store[i];
    }
    return sum / this.store.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
