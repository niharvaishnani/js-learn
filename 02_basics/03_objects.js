//object literals   

const mysum=Symbol();// using symbol to create a unique property key
// symbols are unique and can be used as property keys in objects
// they are not enumerable and do not conflict with other property names
// symbols are often used to create private properties or methods

const person ={
    name: "John",
    age: 30,
    [mysum]:"my sum",
    email:"nihar@google.com",
    city: "New York",

}  
console.log(person.age) 
console.log(person["name"])
console.log(person[mysum]) // using symbol to access property  


person.email = "nihjndjs@patel" 

console.log(person.email) // updated email;  

Object.freeze(person.email); // freeze the object to prevent further modifications 

// Note: Object.freeze does not work on primitive values like strings, so this line has no effect
// To freeze the entire object, use Object.freeze(person) instead
// However, this will not prevent changes to the properties of the object itself
// To prevent changes to the properties, you can use Object.seal(person) or Object.freeze
// but these methods do not work on primitive values like strings
// To prevent changes to the email property, you can use Object.defineProperty
Object.defineProperty(person, 'email', {
    writable: false, // make the property read-only
    configurable: false // prevent deletion or reconfiguration of the property
});

person.email = "jhldfjdslkjgdsjg"
