// Activity 1 :   Arithematic Operators
// ( + - * / % )    oprators we used in our program 

const add = 10 + 20;
console.log(add);

const remainder = 10%3;
console.log(remainder);

// Activity 2 : Assignment operators 

// used of +=, -=, *=, /=, %=
let a = 12;
a +=10;
console.log(a);

let  b= 13;
b -=10;
console.log(a ,"and ",b);

// Activity 3 : Camparision opeators

// used of ==, !=, ===, !==, >, <, >=, <=

n = 22;
m = "22";

console.log("n == m : ", n == m);
console.log("n != m : ", n != m);
console.log("n === m : ", n === m);
console.log("n !== m : ", n !== m);
console.log("n > m : ", n > m);
console.log("n < m : ", n < m);
console.log("n >= m : ", n >= m); // true
console.log("n <= m : ", n <= m);  // true  

// Actvity 4 : Logical operators 
// used of &&, ||, !

let money = 100;
let age =20;
const ismarried = money >=100 && age >=20;
console.log(ismarried)  // true it is Boolean result ok

const isnibanibi = money<100 || age<20;
console.log(isnibanibi)  //  it is Boolean result ok

const isgirlfriend = false;  // it change the value  T to F either or reverse the case ok 
console.log( "isgirlfriend : ",!isgirlfriend)



//  Activity 5: Ternary operator 

// used of ? :

const isMarried = true;
isMarried ? console.log("I am married") : console.log("I am single")

let number = -12;
const num = number> 0?"postive":"negative";
console.log(`number is ${number}`,num)