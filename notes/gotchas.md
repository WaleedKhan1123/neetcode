Statically typed (Java, C++, C#)

You tell the computer the type when you create the variable, and it can never change:

java
int count = 5;
count = "hello";   // ERROR: count can only hold numbers

The type belongs to the variable. Think of it as a labeled box: "numbers only".

Dynamically typed (JavaScript, Python)

The type belongs to the value, not the variable. JavaScript looks at the value and figures out the type by itself, while the program runs:

js
let count = 5;        // count holds a number
count = "hello";      // now it holds a string, no error
count = [1, 2, 3];    // now an array, still fines




