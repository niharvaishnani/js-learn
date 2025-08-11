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

// console.log("A",arr);
// const myn1= arr.slice(1, 3); // creates a new array with elements from index 1 to 2
// console.log(myn1); // prints the new array 
// console.log("B",arr);
// 
// const myn2= arr.splice(1, 3);
// console.log("C",arr);   
// console.log(myn2); // removes elements from index 1 to 3 and returns them  

const multiply =5;

const arr2=[10,11,12,13,14,15]

for (let i = 0; i < arr2.length; i++) {
    const element = multiply*arr2[i];
  //  console.log(`${arr2[i]} * ${multiply} ${element}`); // prints each element multiplied by 5
}

const a ="hello how are you"  

for(i=0;i<a.length;i++){
   // console.log(a[i]); // prints each character of the string
    }    

let total=0;
const marks=[45,87,98,65,34,69,89] 
for (let i=0;i<marks.length;i++){
    total+=marks[i]; // calculates the total of all marks
} 
// console.log(total); // prints the total of all marks
// console.log(Math.round(total/marks.length)); // prints the average of all marks


const bakery = ["bread", "cake", "pastry", "cookies", "muffins"];

const mybakery=bakery

//console.log(mybakery);  

mybakery.push("brownie"); // adds brownie to the end of the array
mybakery.push("donut"); // adds donut to the end of the array
//console.log(mybakery); // prints the updated array with brownie and donut

// console.log(bakery); // prints the original array, which is also updated because mybakery is a reference to bakery


