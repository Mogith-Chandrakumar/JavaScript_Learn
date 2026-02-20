// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;
console.log(z); // Outputs: 11

//Multiplying values:
let a = x * y;
console.log(a); // Outputs: 30
// Dividing values:
let b = y / x;
console.log(b); // Outputs: 1.2 
// Subtracting values:
let c = y - x;
console.log(c); // Outputs: 1
// Modulus operation:
let d = y % x;
console.log(d); // Outputs: 1
// Incrementing values:
x++;
console.log(x); // Outputs: 6
// Decrementing values:
y--;
console.log(y); // Outputs: 5   
// Combining operations:
let e = (x + y) * 2;
console.log(e); // Outputs: 22

// How to Use Conditional Statements:
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

// Example of conditional statements:
let age = 20;  
if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 65) {
  console.log("Adult");
} else {
  console.log("Senior");
} // Outputs: Adult

// How to Use Loops:
// For Loop:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Outputs: 0 1 2 3 4   

// While Loop:
let j = 0;      
while (j < 5) {
    console.log(j);     
    j++;
}
// Outputs: 0 1 2 3 4   

// Do-While Loop:
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// Outputs: 0 1 2 3 4

// How to Define Functions:
function greet(name) {
  return "Hello, " + name + "!";
}   
console.log(greet("Alice")); // Outputs: Hello, Alice!

function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // Outputs: 7`

// Function with no parameters:
function sayHello() {
  return "Hello, World!";
} 

console.log(sayHello()); // Outputs: Hello, World!

// Function with multiple parameters:
function add (a, b) {
  return a + b ;//
  
}

console.log(add(3,4)); // out put : 7
// file upload

// Function with no parameters:
function sayHello() {
  return "Hello, World!";
}

// check
function sayHello() {
  return  "Hi";
}

//cheking
funcion say () {
 return "Integer";
}