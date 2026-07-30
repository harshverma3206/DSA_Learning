const arr = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,1];
let Zero = 0, One = 0;

for(let i = 0;i<arr.length;i++){
    if(arr[i] == 0) Zero++;
    else One++;
}

console.log(Zero, One);
