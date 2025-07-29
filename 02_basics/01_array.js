//basics of arrays

const arr = [0,1, 2, 3, 4, 5];
// console.log(arr); // prints the array
// console.log(arr.length); // prints the length of the array  

// array methods 


// console.log(arr.push(6));
// console.log(arr); // prints the array after adding 6 at the end
// console.log(arr.pop()); // removes the last element and prints it
// console.log(arr); // prints the array after removing the last element
// console.log(arr.unshift(0)); // adds 0 at the beginning of the array
// console.log(arr); // prints the array after adding 0 at the beginning
// console.log(arr.shift()); // removes the first element and prints it
// console.log(arr); // prints the array after removing the first element      

const newarr=  arr.join()
// console.log(newarr); // prints the array as a string


//slice and splice

console.log("A",arr);
const myn1= arr.slice(1, 3); // creates a new array with elements from index 1 to 2
console.log(myn1); // prints the new array 
console.log("B",arr);

const myn2= arr.splice(1, 3);
console.log("C",arr);
console.log(myn2); // removes elements from index 1 to 3 and returns them
 