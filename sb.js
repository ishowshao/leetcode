let total = 0;
let top = 27719;
let rt = 0.96442;
for (let i = 0; i < 156; i++) {
    console.log(i, Math.pow(rt, i) * top);
    total += Math.pow(rt, i) * top;
}

console.log(total);