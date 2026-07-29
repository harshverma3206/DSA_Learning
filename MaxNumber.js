const arr = [4, 5, 9, 8, 14];
let max = arr[0];
for(let i = 1; i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}

console.log(max);
