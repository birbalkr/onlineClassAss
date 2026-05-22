// Find Duplicate Elements
arr = [1, 2, 3, 4, 5, 2, 3, 6,6];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        arr[i]===arr[j]?duplicates.push(arr[i]):"";
    }
}

console.log(duplicates);
