const arr = [4, 6, 9, 2, 3, 5, 7, 0, 1];
let result = arr.length;

for (let i = 0; i < arr.length; i++) {
    result ^= i ^ arr[i];    
}

console.log(result);

