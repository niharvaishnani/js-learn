// const isloogedin = "helllo@.com"; 
// if(isloogedin) {
//     console.log("User is logged in");
// } else {
//     console.log("User is not logged in");
// }

// The above code will log "User is logged in" because the string is non-empty and thus truthy.
       
// falsy values in js 

// false,0,-0,null,undefined,NaN,"" (empty string) , BigInt(0n) are falsy values in js  

//truthy values in js
//"false", "0", " ", [], {}, function(){} are truthy values in js  

// const isemail=[] 

// if(isemail.length===0) {  // this will check if the array is empty
//     console.log("Email is empty");
// }  

// const obj = {}; // empty object
// if(Object.keys(obj).length === 0) { // this will check if the object is empty
//     console.log("Object is empty");
// } else {
//     console.log("Object is not empty");
// }  

// Nulish coalescing operator (??)  

let val1;

 val1= 10 ?? 20;
val1= null ?? 20; // null is falsy value so it will return 20
val1= undefined ?? 20; 

console.log(val1)  

// ternary operator ?  

const ice =100 
ice<=80 ?console.log("it is cold") : console.log("it is hot"); // if ice is less than or equal to 80 it will log "it is cold" otherwise it will log "it is hot"