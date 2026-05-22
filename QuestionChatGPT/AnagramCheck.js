// Anagram Check

a="listen"
b="silent"
a=a.split("").sort().join("")
b=b.split("").sort().join("")

console.log(`${a}\n${b}`);


if (a === b) {
    console.log("Anagram")
}
else {
    console.log("Not an Anagram")
}


