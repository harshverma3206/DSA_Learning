const arr = [5, 7, 2, 4, 3];
let target = 3;
let ans = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        ans = true;
        break;
    }
}

console.log(ans);