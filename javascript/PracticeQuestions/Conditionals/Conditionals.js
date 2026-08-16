// Check whether a number is positive or negative.
let number = -6;
console.log(number < 0 ? "Negative" : "Positive");;

// Check whether a number is even or odd.
console.log(number % 2 == 0 ? "even" : "odd");

// Check whether a person is eligible to vote.
personAge = 18;
console.log(personAge >= 18 ? "Eligible to vote" : "Not eligible to vote");

// Find the largest among two numbers.
let num1 = 20;
let num2 = 10;
console.log(num1 > num2 ? "num1 is larger" : num1 == num2 ? "both same" : "num2 is larger");

// Find the largest among three numbers.
let num3 = 30;
console.log(num1 > num2 && num1 > num3 ? "num1 is largest" : num2 > num1 && num2 > num3 ? "num2 is largest" : num3 > num1 && num3 > num2 ? "num3 is largest" : "all are same");

// Check whether a year is a leap year.
let year = 2020;
console.log(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? "Leap year" : "Not a leap year");

// Check whether a number is divisible by both 3 and 5.
let num = 15;
console.log(num % 3 == 0 && num % 5 == 0 ? "divisible by both 3 and 5" : "not divisible by both 3 and 5");

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
let test=95;
console.log(test >= 90 ? "A" : test >= 75 && test <= 90 ? "B" : test >= 50 && test <= 75 ? "C" : "Fail");

