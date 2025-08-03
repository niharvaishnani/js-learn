// function addTwoNumbers(a, b) {
//     return a + b;
// }
// const result = addTwoNumbers(3, 5); // returns and  function arguments are 3 and 5 

// // here we used returen statement we store the result in a variable called result
// console.log(result); // Output: 8

// function userloggedIn(username="nihar") {
//     if(!username) {
//         return "User is not logged in"; // if username is falsy, return this message
//     } else{
//         return `User  ${username} logged in`; // if username is truthy, return this message
//     }
// }
//   console.log(userloggedIn("niharika"));  // Output: "nihar is logged in" //value overrides the default value
//console.log(userloggedIn());  // Output: "User is not logged in"  

// function calPricce(...num1){
//     return num1
// }
// console.log(calPricce(10,20,30)); // Output: 10   here we used rest operator to collect all arguments into an array

// how to used object and array with functions
    const user = {
        name: "Nihar",
        age: 30,
        email: " hello@123"
    };

    function displayUserInfo(anyobject) {
        console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}, Email: ${anyobject.email}`);
    } 

    displayUserInfo(user); // Output: Name: Nihar, Age: 30, Email: hello@123  

    const numbers = [1, 2, 3, 4, 5];
    function getarray(arr){
        return arr[0]; // returns the first element of the array
    } 

    console.log(getarray(numbers)); // Output: 1