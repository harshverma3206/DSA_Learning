const arr = [1, 2, 3, 4, 5];
let j = arr.length - 1;
let ans = [];

for (let i = 0; i < arr.length; i++) {
    if (i < j) {
        ans.push(arr[i]);
        ans.push(arr[j]);
        j--;
    } else if (i == j) {
        ans.push(arr[i]);
    }
}

console.log(ans);
