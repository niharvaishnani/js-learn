// for loop  

// for (let i = 0; i <= 5; i++) { 
//     const element = i;
//     if (i === 3) {
//         console.log("Skipping number 3");
//        continue; // skips the rest of the loop for this iteration
//     }
//     console.log( i);
// }  

//let myarry= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// for (let i=0; i<myarry.length; i++) {
//     const element = myarry[i]; 
//    // console.log(element); 
// }
     
// while and do while loop  

// let i = 0;
// while(i<10)
// {
//     console.log(i);
//     i=i+2
    
// }         

// let arry= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// let a=0;

// while(a<arry.length ) {       
//     //console.log(arry[a]);  
//     a++; // incrementing a to avoid infinite loop
// }  


// for  of loop 

// for (const element of arry) {
//     //console.log(element);
// }
    
// const greeting = "hello world";
// for (const char of greeting) {
//    // console.log(char);
// }    


//Map method  

// const map = new Map();
// map.set("indian", "delhi");
// map.set("american", "washington");
// map.set("british", "london");  

// console.log(map);


// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }  


//for in loop  

//const person = {
//     name : "Nihar",
//     age : 30,
//     email : "  hello@123"
// };  

//for (const key in person) {
   // console.log(`${key} : ${person[key]}`);
//}


// for each loop 

//const numbers = [1, 2, 3, 4, 5]; 

//numbers.forEach(function(num){
     //console.log(num);
//})   

//numbers.forEach( (num)=>{
   // console.log(num);
    
//})   

//array of object    IMP TOPIC 

const person=[
    {
        name: "Nihar",
        age: 30,
        email: "hello@123"
    },
    {
        name: "John",
        age: 25,
        email: "nihar@234"
    }
]   

person.forEach((item) => {
    console.log(`${item.name} ni age ${item.age} che` );
}); // Accessing the name property of each object in the array);
    
//filter 

const mynums =[1,2,3,4,5,6,7,8,9,10]
const mynumber=mynums.filter( (nums)=>{
   return nums>5
})  
console.log(mynumber);   

//map
const mynumber1=mynums
               .map( (nums)=> nums*2 )
               .map( (nums)=> nums+1 ) 
               .filter( (nums)=> nums>10 )
 console.log(mynumber1);  

 //reduce
 const mynumber3=mynums.reduce( (acc, curr)=>{
    acc=acc+curr
    return acc
 },0)  
 console.log(mynumber3);


 const shoopingCart=[
    {
        productId:1,
        productName:"mobile",
        price:12000
    },
    {
        productId:2,
        productName:"laptop",
        price:22000
    },
    {
        productId:3,
        productName:"tv",
        price:32000
    }
 ] 

 const total=shoopingCart.reduce( (acc,item,)=>(acc+item.price),0) 

 console.log(total);
 
