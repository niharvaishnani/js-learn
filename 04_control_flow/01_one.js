//control flow 

// if (false){   //if we used true here code inside the block woulld run and we used false so it will not run and we will go tothe else block
//     console.log("This will always run");
// }  

// else{
//     console.log("This will never run");
// }  

//<,>,<=,>=,==,===,!=,!==,  

// if(2!="3"){  //=== is strict equality operator, it checks both value and type
//     console.log("This will never run");
// } else {
//     console.log("This will always run");
// }  

// const score = 100;

// if(score >= 90){    
//     const power='fly'
//     console.log(`You have super power: ${power}`);  
// } 
//  console.log(`You have super power: ${power}`);  //it is give error because power is not defined outside the if block but we used var keyword we can accessoutside block

//if (true)  console.log("hello"); // it called implicit block, it is not a good practice to use implicit block, always use explicit block with curly braces


// nested if-else
// const score = 85;

// if (score >= 90) {
//     console.log("You got an A!");
// } else if (score >= 80) {
//     console.log("You got a B!");
// } else if (score >= 70) {
//     console.log("You got a C!");
// } else {
//     console.log("You need to improve your score.");
// }    

//switch statement  

const day = 3; // Change this value to test different cases

switch (day) {
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    default:
        console.log("It's another day of the week!");
        break;
}
