const user ={
    name: "Nihar",
    age: 30,
    email: "hello@123",

    welcomeMessage: function(){
        console.log(`Welcome ${this.name}!`); // 'this' refers to the current object
    }


}  

user.welcomeMessage(); // Output: Welcome Nihar! 
// Here, 'this' refers to the 'user' object, allowing access to its properties and methods
user.name = "Niharika"; // updating the name property
user.welcomeMessage(); // Output: Welcome Niharika!  
//thatis call current context of the object

// console.log(this)

function greet(){
    let name = "Niharika";
    console.log(this.name); // we can not used this directly in function, it will give undefined
} 

greet(); // Output: undefined   

//arrow function 

// const arrowGreet = () => {}  sysntex of arrow function   


const arrowGreet = (a,b) => (
    a + b 
)
console.log(arrowGreet(3, 5)); // Output: 8  


// round bracket used in mostly react   