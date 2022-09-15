/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const ips = [];
    const helper = (s, ip) => {
        if (s === '') {
            return;
        }
        if (ip.length === 3) {
            if (s.length > 1 && s[0] === '0') {
                return;
            }
            if (s > 255) {
                return;
            }
            ip.push(s);
            // check ip
            // console.log(ip);
            ips.push(ip.join('.'));
            ip.pop();
            return;
        }
        for (let i = 1; i < 4; i++) {
            if (i > s.length) {
                break;
            }
            let sub = s.substring(0, i);
            if (i > 1 && sub[0] === '0') {
                continue;
            }
            if (sub > 255) {
                continue;
            }
            ip.push(sub);
            helper(s.substring(i), ip);
            ip.pop();
        }
    };
    helper(s, []);
    return ips;
};

console.log(restoreIpAddresses('101023'));
console.log(restoreIpAddresses('0000'));
