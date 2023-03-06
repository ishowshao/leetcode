/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    const map = new Map();
    const ans = [];
    for (let i = 0; i < names.length; i++) {
        let { base, index } = parse(names[i]);
        if (!map.has(base)) {
            map.set(base, index ? [index] : []);
            ans.push(names[i]);
        } else {
            const indexes = map.get(base);
            if (index) {
                if (indexes.includes(index)) {
                    map.set(names[i], []);
                    ans.push(names[i] + '(1)');
                } else {
                    // 插入排序
                    if (indexes[index - 1] === undefined) {
                        indexes.push(index);
                    } else {
                        indexes.splice(index - 1, 0, index);
                    }
                    ans.push(names[i]);
                }
            } else {
                // 确定index
                let i = 0;
                for (; i < indexes.length; i++) {
                    if (indexes[i] + 1 !== indexes[i + 1]) {
                        break;
                    }
                }
                // 插入
                indexes.splice(i + 1, 0, i + 2);
                ans.push(`${base}(${i + 2})`);
            }
        }
    }
    return ans;
};

/**
 * @param {string} name 
 * @returns {Object}
 */
const parse = (name) => {
    const l = name.lastIndexOf('(');
    const r = name.lastIndexOf(')');
    let index = null;
    let base = name;
    if (l > -1 && r > -1) {
        index = Number(name.substring(l + 1, r));
        base = name.substring(0, l);
    }
    return {
        base: base,
        index: index,
    };
};

console.log(parse('abc('));