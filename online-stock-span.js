var StockSpanner = function () {
    this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    // [100,80,60,70,60,75,85]
    let element = [price, null];
    let ans = 1;
    for (let i = this.prices.length - 1; i > -1; i--) {
        if (this.prices[i][0] <= price) {
            ans += this.prices[i][1];
            this.prices.pop();
        } else {
            break;
        }
    }
    element[1] = ans;
    this.prices.push(element);
    return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
const stockSpanner = new StockSpanner();
stockSpanner.next(100); // 返回 1
stockSpanner.next(80);  // 返回 1
stockSpanner.next(60);  // 返回 1
stockSpanner.next(70);  // 返回 2
stockSpanner.next(60);  // 返回 1
stockSpanner.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
stockSpanner.next(85);  // 返回 6
