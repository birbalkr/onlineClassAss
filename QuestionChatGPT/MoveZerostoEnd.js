// Move Zeros to End
let arr = [0, 1, 0, 3, 12];
let newArr = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        newArr.push(arr[i]);
    }
    else {
        count++;
    }
}
for (let i = 0; i < count; i++) {
    newArr.push(0);
}

console.log(newArr);

