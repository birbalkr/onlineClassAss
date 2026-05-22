// Find Missing Number

number=[1,2,3,5];
let sum = 0;
for(let i=0;i<number.length;i++){
    sum+=number[i];
    console.log(sum);
    
}

let missingnum =Math.round((number.length+1)*(number.length+2)/2)-sum;

console.log(`Missing number is ${missingnum}`);


