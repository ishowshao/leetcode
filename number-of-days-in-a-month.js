/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function (year, month) {
    const d31 = [1, 3, 5, 7, 8, 10, 12];
    const d30 = [4, 6, 9, 11];
    if (d31.includes(month)) {
        return 31;
    }
    if (d30.includes(month)) {
        return 30;
    }
    if (month === 2 && (year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0))) {
        return 29;
    }
    return 28;
};
