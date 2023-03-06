/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let ans = 0;
    const b = Array(s.length).fill(0);
    const a = Array(s.length).fill(0);
    let counter = 0;
    let score = 0;
    for (let i = s.length - 1; i > -1; i--) {
        if (s[i] === 'a') {
            counter++;
        }
        if (s[i] === 'b') {
            score += counter;
            b[i] = counter;
        }
    }
    counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'b') {
            counter++;
        }
        if (s[i] === 'a') {
            a[i] = counter;
        }
    }
    // console.log(b, a, score, );
    let left = 0;
    let right = s.length - 1;
    let da = 0;
    let db = 0;

    while (score > 0) {
        while (b[left] === 0) {
            left++;
        }
        while (a[right] === 0) {
            right--;
        }
        if (b[left] - da < a[right] - db) {
            score -= a[right] - db;
            da++;
            right--;
            // console.log('delete a');
        } else {
            score -= b[left] - da;
            db++;
            left++;
            // console.log('delete b');
        }
        ans++;
    }
    return ans;
};

minimumDeletions('aababbab');
// aababbab
