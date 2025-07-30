const marvel_heroes =["spaiderMan", "ironMan", "hulk", "thor", "blackWidow", "captainAmerica", "blackPanther"];
const dc_heroes = ["superman", "batman", "wonderWoman", "flash", "aquaman", "greenLantern", "cyborg"];
const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log( all_heroes); // prints all heroes from both arrays

// console.log(all_heroes); // prints all heroes from both arrays
// console.log("D",arr); // prints the array after splicing


// console.log(arr.reverse()); // reverses the array and prints it 

const all_heroes_new=[...marvel_heroes,...dc_heroes]

// console.log(all_heroes_new); // prints all heroes from both arrays using spread operator  


const arr1 = [1, 2, 3,[4, 5],6, 7, 8, 9,[10, 11]]; 

// console.log(arr1.flat(Infinity)); // prints the array with nested arrays


console.log(Array.from("hello")); // converts a string to an array of characters
