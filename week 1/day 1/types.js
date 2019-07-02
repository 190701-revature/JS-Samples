// What is a data type?
// Under the surface, the computer just stores data as binary. Data types
// provide a meaning to that data beyond just its value, and from that define
// how we can interact with that data.

/**
 * Types in JavaScript
 * -------------------
 * 
 * Guesses:
 * * var
 * * integer x
 * * float x
 * * string
 * * char
 * * long x
 * * double x
 * * boolean
 * * short x
 * * number
 */

/*
    Note: typeof keyword can be used to determine type    

    Actual Types:
*/

let x;
console.log(typeof x); // undefined

x = null;
console.log(typeof x); // object

x = 10;
console.log(typeof x); // number - what is a number?

x = 10.12;
console.log(typeof x); // number - (64 bit floating point number, ie: double)

x = true;
console.log(typeof x); // boolean

x = 'a string';
console.log(typeof x); // string

x = []; // <-- array literal
console.log(typeof x); // object

// Aside: about string literals
x = "It's my birthday."; // <--- Don't use this one
x = 'It\'s my birthday.'; // <--- Use this one
x = `It's my birthday.`; // <--- or this one (some functional difference)

x = {}; // <-- Object literal notation
console.log(typeof x); // object

x = function() {}; // <-- {} - function body
console.log(typeof x); // function (note: Not a datatype, but still a type)

x = Symbol('some-identifier');
console.log(typeof x);

// Review: What types are available in JS?
/*  1. number   
    2. undefined
    3. string
    4. boolean
    5. object
    6. symbol
    7. function
 * 
 */