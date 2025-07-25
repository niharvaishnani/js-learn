const accountId= 12345;
// const value can not change   

accountId = 67890; // This will throw an error because accountId is a constant
log(accountId); // Output: 12345

//-------------------------------//

let accountName = "John Doe";
// let value can change

var accountBalance = 1000;
// var is function scoped, can be redeclared and updated  


accountBalance= 2000; // This is allowed
console.log(accountBalance); // Output: 2000
console.log("Nihar"); // Output: Nihar
// This line is added to the file to match the context provided