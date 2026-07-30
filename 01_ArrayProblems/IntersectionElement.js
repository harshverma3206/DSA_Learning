const arr = [5, 6, 7, 9];
const arr2 = [1, 5, , 9, 3, 6];
const ans = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] == arr2[j]) {
            ans.push(arr[i])
        }
    }
}

console.log(ans);
