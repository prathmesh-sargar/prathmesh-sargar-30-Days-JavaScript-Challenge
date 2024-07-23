// Day 8 : ES6 + fatures  

// Activity 1 : temlate Litrals 

const name = "Rohan";
const age = 19;
console.log(`the name of person is ${name} and his age is ${age}`);

console.log("multiline String : ");
console.log(` 
              *
            * * * 
          * * * * * 
        `);

// Actvitiy 2 : Destructuring  

// const arr = [12,45];

// const {first, second } = arr;
// console.log(` first is : ${first} and second is : ${second}`);
// console.log(` first is ${arr[0]} and second is  ${arr[1]}`);

const arr = [10, 20]; // Define your array (don't forget 'const' here!)
const [ first, second ] = arr; // Destructure the array
console.log(`first is: ${first} and second is: ${second}`);


const obj = {
    title : "The epic sheet",
    Author: "Ankur woriku",
    year : 2022
}

const {title,Author,year} = obj;
console.log(`title is : ${title} and Author is : ${Author} and year is : ${year}`);


// Activity 3 : Spreed and rest operator 

let ar1 = [1,2,3,4,5];
let arrAll = [...ar1,6,7,8,9,10]  // spread opearator : 
console.log(arrAll);


// used spread operator in function ok 
// Shoping card ok  
const add = (...sum)=>{
    console.log(sum);
    let addu =  sum.reduce((a,b)=> a+b)
    // console.log(addu);
    return addu
}

 const result =  add(1,2,3,4,100)
 console.log("result is : ",result);


 // Activity 4 : default parameter 


 const multi = (a, b =1)=>{
    return a*b;
 }

 const mulresult = multi(10,12);  // default paprameter 
 console.log(mulresult);


 // Enhance object literals ok : 

let fullname = "Sarikha"
let age1 = 20;

let propertyname = "favorite food"
let value = "Birani"

let obj2 = {
    fullname,
    age,
    greet(){
        console.log(`my name is ${this.fullname} and my age is ${age1}`);
    },
    [propertyname]: value
}

console.log(obj2);
obj2.greet();
