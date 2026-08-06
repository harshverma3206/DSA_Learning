const arr = [2, 3, 5, 4, 5, 3, 4];
let result = 0;

for (let n of arr) {
    result ^= n;
}

console.log(result);

