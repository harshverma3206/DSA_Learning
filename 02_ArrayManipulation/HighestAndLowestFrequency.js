const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 0, 6];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

let max = -Infinity, min = Infinity;
let maxElement, minElement;

for (let [key, value] of map) {
    if (value > max) {
        max = value;
        maxElement = key;
    }
    if (value <= min) {
        min = value;
        minElement = key;
    }
}

console.log(maxElement);
console.log(minElement);



