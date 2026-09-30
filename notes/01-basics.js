const x =5;
let count = 10;

7/2
Math.floor(7/2)
Math.trunc(-7/2)
7%3
2**10
Math.max(5, 10) 
Math.min(5, 10)
Math.abs(-5)
Math.sqrt(9)
Math.max(...[1,2,3,4,5])
Infinity 
-Infinity
parseInt("100px")
Number("100")
String(100)

// ===  !==              // always use these, not == / !=
// cond ? a : b          // ternary
console.log(Math.max(...[1,100,2,3,4,5]))
// Falsy values

// In JavaScript, any value can be used as a condition in an if. Most values count as true, but exactly six count as false. These are called falsy:

// js
// false
// 0
// ""          // empty string
// null
// undefined
// NaN


// js
// if ("0") {}   // runs! non-empty string
// if ([]) {}    // runs! empty array
// if ({}) {}    // runs! empty object

// A common gotcha: if you write if (count) to check whether a variable exists, it will also fail when count is 0, even though 0 is a real value. In coding problems where 0 is a valid answer or index, compare explicitly instead: if (count !== undefined).

// Ternary: cond ? a : b

// It's a short if/else that gives back a value. Read it as: "is the condition true? If yes, a, otherwise b."

// js
// const age = 20;
// const status = age >= 18 ? "adult" : "minor";
// console.log(status); // "adult"

// This is the same as:

// js
// let status;
// if (age >= 18) {
//   status = "adult";
// } else {
//   status = "minor";
// }

// Use the ternary for simple one-line choices. For anything complicated, a normal if/else is easier to read.