// function addTwoNumbers(a, b) {
//     return a + b;
// }
// const result = addTwoNumbers(3, 5); // returns and  function arguments are 3 and 5 

// // here we used returen statement we store the result in a variable called result
// console.log(result); // Output: 8

function userloggedIn(username="nihar") {
    if(!username) {
        return "User is not logged in"; // if username is falsy, return this message
    } else{
        return `User  ${username} logged in`; // if username is truthy, return this message
    }
}
  console.log(userloggedIn("niharika"));  // Output: "nihar is logged in" //value overrides the default value
//console.log(userloggedIn());  // Output: "User is not logged in"
    