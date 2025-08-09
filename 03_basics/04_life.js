// immediately invoked function expression (IIFE)

(function() {
  console.log("This function runs immediately!");
})();  
//global polution is avoided with IIFE 

(() => {
  console.log("This is another IIFE using arrow function syntax!");
} )(); 

((name)=>{
  console.log(`Hello, ${name}`); 
})('nihar')