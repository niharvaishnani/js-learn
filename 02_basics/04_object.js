// singletaned   

// const person=new Object(); // creating an empty object using the Object constructor

const person={
    emaill: "nihar@chatgpt.com",
    fullname:{
        firstname: "Nihar",
        lastname: "Patel"
    }
} 

// console.log(person.fullname.firstname) // accessing nested object property;
// console.log(person["fullname"]["lastname"]) // accessing nested object property using bracket notation  

const obj1={1: "one", 2: "two"}; // object with numeric keys
const obj2={3: "uno", 4: "dos"}; // another object 

// using Object.assign to merge objects
// const mergedObj=Object.assign({}, obj1, obj2); // merging obj1 and obj2 into a new object
// console.log(mergedObj);   

const mergedObj={...obj1, ...obj2}; // using spread operator to merge objects
// console.log(mergedObj); // { '1': 'one', '2': 'two', '3': 'uno', '4': 'dos' }    


//destructuring objects
const nihar ={
    name: "Nihar",
    age: 30,
    email: "hello@123" 
} 

const {name : n, age, email} = nihar; // destructuring object properties into variables
console.log(n); // Nihar
console.log(age); // 30
console.log(email); // hello@123
