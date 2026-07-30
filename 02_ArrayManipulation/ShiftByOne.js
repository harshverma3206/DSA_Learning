const arr = [1, 2, 3, 4, 5, 6];
let i = 1;
let j = arr.length - 1;
let data = arr[j];

while (j >= i) {
    arr[j] = arr[j - 1];
    j--;
}
arr[0] = data;

console.log(arr);
