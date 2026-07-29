const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i = i + 2) {
    let temp = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = temp;
}

console.log(arr);

