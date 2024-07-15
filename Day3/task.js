// Control Statement :

// Activity 1: if else statement

let num = 12;

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative ");
}

// Task 2 :

let voterage = 19;
if (voterage >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible for voting");
}

// Activity 2 :  Nested if else  statement

// find largest number between two number

let a = 40;
let b = 20;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log("a is greater then b and c ");
  } else {
    console.log("c is greater then a and b ");
  }
} else if (b > c) {
  console.log("b is greater then a and c ");
} else {
  console.log("c is greater then a and b ");
}

// Activity 3 : switch case statement

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;

  default:
    console.log("Invalid day number ");
}

// grade calculator

const marks = 40;
switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 50:
    console.log("C");
    break;
  case marks >= 35:
    console.log("D");
    break;

  default:
    console.log("fail");
}

// Activity 4 : ternary operator

const result = 10 > 20 ? "10 is greater" : "20 is greater";
console.log("result is ", result);

// used of ternary oprator for find greater number between three numbers

n1 = 12;
n2 = 80;
n3 = 45;
const bigNumber =
  n1 > n2
    ? n1 > n3
      ? "n1 is greater then n2 and n3"
      : "n3 is greater then n1 and n2"
    : n2 > n3
    ? "n2 is greater then n1 and n3"
    : "n3 is greater then n1 and n2";
console.log("big number is ", bigNumber);
const bignum = n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
console.log("bignum is ", bignum);



let inputnum = 12;
const oddeven = (inputnum%2 ==0)? "even":"odd";
console.log("number is ", oddeven);



// combining conditions in ternary operator 

// Leap year calculator 

const year = 2023;

const leapyear = year %4 ==0 && year %100 !=0 || year%400 == 0? "Leap year ": "Not a Leap Year";
console.log("year is ", leapyear);