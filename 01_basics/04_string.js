const gamename="nihar"
const age=18
console.log(gamename+age); // nihar18 it is old way of concatenation
console.log(`${gamename} ${age}`); // nihar 18, it is new way

console.log("Hitesh" + " " + "Kumar"); // Hitesh Kumar, old way

console.log(gamename.toUpperCase()); 
console.log(gamename.charAt(3)); // r, it will give the character at index 3
console.log(gamename.indexOf("h")); // 2, it will give the index


const gameChanger=gamename.substring(0, 3); // nihar, it will give the substring from index 0 to 3
console.log(gameChanger); // nihar 

const gameChanger2=gamename.slice(-4, 3); // nihar, it will give the substring from index 0 to 3
console.log(gameChanger2); // nihar 

const nihar2="    nihar kumar";
console.log(nihar2); //     nihar kumar, it will print the string with spaces
console.log(nihar2.trim()); // nihar kumar, it will remove the spaces from the beginning and end


const url="https://www.google.com";
console.log(url.replace("https","http"));


