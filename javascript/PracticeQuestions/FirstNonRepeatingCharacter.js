// First Non-Repeating Character

a = "leetcode"
b = ""
let count = 0
for (let i = 0; i < a.length; i++) {
    count = 0
    for (let j = 0; j < a.length; j++) {
        if (a[i] == a[j]) {
            count++
        }
    }
    if (count == 1) {
        b = a[i]
        break
    }
    else {
        b = "No non-repeating character"
    }
}
console.log(`First char : ${b}`);
