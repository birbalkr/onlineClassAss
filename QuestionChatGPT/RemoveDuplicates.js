// Remove Duplicates

let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArr = [];

for (i = 0; i < arr.length; i++) {
    let isflag = true;
    for (j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            isflag = false;
            break;
        }
    }
    if (isflag) {
        uniqueArr.push(arr[i]);
    }
}


console.log(`old array: ${arr} And new array: ${uniqueArr}`);
