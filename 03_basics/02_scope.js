

if (true) {
let a=10;
const b=20;
var c=30; 
}  

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
//console.log(c); // 30, var is function scoped or globally scoped

// let and const are block scoped, meaning they are only accessible within the block they are defined in
// var is function scoped or globally scoped, meaning it can be accessed outside the block it is defined in

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30, var is function scoped or globally scoped  


// let a=100
// console.log(a);   

// ********************************** hoisting **********************************

console.log(hoistingExample(10)); // Output: 11, function is hoisted

function hoistingExample(a) {
    return a+1
}   



