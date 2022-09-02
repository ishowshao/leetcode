/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let money = [0, 0, 0];
    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        if (bill === 5) {
            money[0]++;
        } else if (bill === 10) {
            money[0]--;
            money[1]++;
            if (money[0] < 0) {
                return false;
            }
        } else if (bill === 20) {
            if (money[1] > 0) {
                money[1]--;
                money[0]--;
                money[2]++;
            } else {
                money[0] -= 3;
                money[2]++;
            }
            if (money[0] < 0) {
                return false;
            }
        }
    }
    return true;
};
