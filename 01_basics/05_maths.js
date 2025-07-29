const balance = 1000
console.log(typeof 1000);


const balance2 =new Number(1000455);
console.log( balance.toString()); // object, because it's a Number object
console.log(typeof balance2); // object, because it's a Number object
console.log(balance2.toFixed(2)); // 1000.00, it will give the number with 2 decimal places
console.log(balance2.toPrecision(4)); // 1000, it will give the number with 4 significant digits  

//*********Math */ 



console.log(Math.PI); // 3.141592653589793, value of PI  

console.log(Math.round(4.6)); // 5, it will round the number to the nearest integer
console.log(Math.round(4.4)); // 4, it will round the number to
console.log(Math.ceil(4.4)); // 5, it will round the number up to the nearest integer
console.log(Math.floor(4.6)); // 4, it will round the number down
console.log(Math.abs(-4.6)); // 4.6, it will give the
console.log(Math.min(4, 6, 2, 8)); // 2, it will give the minimum value
console.log(Math.max(4, 6, 2, 8)); // 8, it will give the maximum value
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)+1); // random integer between 0  

const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // random integer between 10 and 20
console.log(randomNumber); // prints a random integer between 10 and 20



