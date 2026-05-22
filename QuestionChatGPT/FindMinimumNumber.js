//  Find Minimum Number

arr = [5, 2, 9, -1, 5, 6];
let a=1;

for(i=0;i<arr.length;i++){
    a = Math.min(a,arr[i]);
}
console.log(a);
