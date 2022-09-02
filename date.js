let times = [
    { str: '2022-09-02 11:11:11', timestamp: 0 },
    { str: '2022-09-03 11:11:11', timestamp: 0 },
    { str: '2022-09-04 00:00:00', timestamp: 0 },
    { str: '2022-09-05 11:11:11', timestamp: 0 },
    { str: '2022-09-10 11:11:11', timestamp: 0 },
    { str: '2022-09-11 11:11:11', timestamp: 0 },
    { str: '2022-09-12 11:11:11', timestamp: 0 },
];

times = times.map(t => {
    const date = new Date(t.str);
    t.timestamp = date.getTime();
    t.week = date.getDay();
    t.month = date.getMonth();
    t.year = date.getFullYear();
    return t;
}).sort((a, b) => a - b);

const offset = new Date().getTimezoneOffset() * 60 * 1000; // 这是时区offset
const group = [];
let g = [];
let gDiv = 0;
// 周一作为第一天用259200000
// 周一作为第一天用172800000
const weekOffset = 172800000;
times.forEach(r => {
    const t = r.timestamp + offset - weekOffset;
    const div = Math.floor(t / 604800000);
    if (gDiv === div) {
        g.push(r);
    } else {
        group.push(g);
        g = [r];
        gDiv = div;
    }
});
group.push(g);
group.shift();

console.log(group);