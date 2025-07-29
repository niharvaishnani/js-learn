//Basic Date Operations in JavaScript

let date = new Date();
console.log(date);
console.log(date.toString()); // prints the date in string format
console.log(date.toDateString()); // prints the date in a more readable format
console.log(date.toISOString()); // prints the date in ISO format
console.log(date.getFullYear()); // prints the year
console.log(date.toLocaleDateString()); // prints the date in local format
console.log(date.getMonth()); // prints the month (0-11, where 0 is January)
console.log(date.getDate()); // prints the day of the month (1-31)
console.log(date.getDay()); // prints the day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // prints the hour (0-23)
console.log(date.getMinutes()); // prints the minutes (0-59)
console.log(date.getSeconds()); // prints the seconds (0-59)
console.log(date.getMilliseconds()); // prints the milliseconds (0-999)

