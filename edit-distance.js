/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    word1 = word1.split('');
    word2 = word2.split('');

    let min = Math.max(word1.length, word2.length);

    const helper = (from) => {
        // 如果 word1.length > word2.length ，插入字符肯定直接放弃
        let d;
        if (from.length < word2.length) {
            d = Math.min(
                distance('rhorse', word2),
                distance('orse', word2),
                distance('rorse', word2)
            ) + 1;
        } else {
            d = Math.min(
                distance('orse', word2),
                distance('rorse', word2)
            ) + 1;
        }
    };

    const distance = (a, b) => {
        let d = Math.max(a.length, b.length);
        let s = Math.min(a.length, b.length);
        for (let i = 0; i < s; i++) {
            if (a[i] === b[i]) {
                d--;
            }
        }
        return d;
    };


    const insert = (word) => {
        let i = 0;
        while (word[i] === word2[i]) {
            i++;
        }
        word.splice(i, 0, word2[i]);
        return word;
    };

    /**
     * @param {Array} word 
     * @returns 
     */
    const del = (word) => {
        word.shift();
        return word;
    };

    const replace = (word) => {
        let i = 0;
        while (word[i] === word2[i]) {
            i++;
        }
        word[i] = word2[i];
        return word;
    };
};

const distance = (a, b) => {
    let d = Math.max(a.length, b.length);
    let s = Math.min(a.length, b.length);
    for (let i = 0; i < s; i++) {
        if (a[i] === b[i]) {
            d--;
        }
    }
    return d;
};

const str = 'abcde';

for (let i = 0; i < str.length; i++) {
    let a = str.substring(0, i) + str.substring(i + 1);
    console.log(a, distance(a, 'acde'));
}


console.log(distance('abcde', 'abccdde'));