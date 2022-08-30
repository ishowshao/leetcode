var RecentCounter = function () {
    this.left = 0;
    this.right = -1;
    this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.requests.push(t);
    this.right++;
    while (this.requests[this.right] - this.requests[this.left] > 3000) {
        this.left++;
    }
    return this.right - this.left + 1;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
