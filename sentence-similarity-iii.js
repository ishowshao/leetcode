/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    return test(sentence1, sentence2) || test(sentence2, sentence1);
};

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
const test = (a, b) => {
    a = a.split(' ');
    b = b.split(' ');
    let sentence = [];
    let ss = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] === b[0]) {
            a.shift();
            b.shift();
            if (sentence.length > 0) {
                ss.push(sentence);
                sentence = [];
            }
        } else {
            const word = a.shift();
            sentence.push(word);
        }
    }
    if (sentence.length > 0) {
        ss.push(sentence);
    }
    if (b.length === 0 && ss.length < 2) {
        if (ss.length === 0) {
            return true;
        }
        if (ss[0].length > 0 && a.length === 0) {
            return true;
        } else if (ss[0].length === 0) {
            return true;
        }
    }
    return false;
};

// console.log(areSentencesSimilar('My name is Haley', 'My Haley'));
// console.log(areSentencesSimilar('of', 'A lot of words'));
// console.log(areSentencesSimilar('qbaVXO Msgr aEWD v ekcb', 'Msgr aEWD ekcb'));
console.log(areSentencesSimilar('Eating right now', 'Eating'));
