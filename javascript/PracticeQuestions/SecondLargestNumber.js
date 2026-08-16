// Find Second Largest Number

arr=[9, 2, 5, 4, 8, 7, 6, 1, 3];
let firstnum = 0;
let secondnum = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>firstnum){
        firstnum=arr[i];
    }
    else if (arr[i] > secondnum && arr[i] !== firstnum) {
        secondnum = arr[i];
    }
}

console.log(`first largest ${firstnum} second largest ${secondnum}`);


