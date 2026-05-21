// find the largest number in the array

a=[2,5,1,9,3]
largest = a[0]
for(i=1;i<a.length;i++){
    if(a[i]>largest){
        largest = a[i]
    }
}
console.log(largest)
