//Ascending Order
const arr = [2, 3, 5, 11, 17];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        console.log(arr[i]);
        break;
    }
}


//Decending Order
const arr2 = [20, 13, 5, 1, 17];
for (let i = 0; i < arr.length; i++) {
    if (arr2[i] < arr2[i + 1]) {
        console.log(arr2[i]);
        break;
    }
}