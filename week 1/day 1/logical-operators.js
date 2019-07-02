// Logical operators
// booleans: true, false

// Logical operators are operators that operate on boolean values or otherwise
// produce boolean values

let t = true;
let f = false;

let x = t || f; // Or operator: ||
// Or evaluates to true when either part of the expression evaluates to true

console.log(x); // true

x = t && f; // And operator: &&
// And evaluates to true only when both sides of the expression evalute to true
console.log(x); // false

x = t === f; // equals operator(s), == ===
// equals evaluates to true only when both sides of the expression are the same
console.log(x); // false

x = t !== f; // not equals, !=, !==
console.log(x); // true

x = !x; // not operator, !
// Not operator negates the value it is attached to
console.log(x); // false

x = t ^ f;
console.log(x);