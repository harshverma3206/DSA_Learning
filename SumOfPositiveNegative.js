const arr = [-1, 5, -6, 7, -5, 8, 3];
let positive = 0;
let negative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive += arr[i];
    } else negative += arr[i];
}

console.log(positive, negative);
