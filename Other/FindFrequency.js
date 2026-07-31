const arr = [10, 1, 3, 4, 5, 10, 1, 6, 7, 7];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map);

