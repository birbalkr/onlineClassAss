// Palindrome Check
let a = "maam"
if(a == a.split("").reverse().join("")){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}