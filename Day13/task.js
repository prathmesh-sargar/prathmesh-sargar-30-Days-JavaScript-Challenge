
import { add, obj } from "./app.js";
import {addition,subtract} from './math.js'
import multiply from "./multiply.js";

 const res = add(12,34);
console.log(res);


const addu = addition(120,100);
console.log("Addition of two numbers : ",addu);

const subraction = subtract(120,100);
console.log("subraction of two numbers : ",subraction);


const multi = multiply(12,5);
console.log(" multiplication of two numbers : ",multi);


// utilities : find out Area  :-:

import { circleArea, circleCircumference } from "./utility.js";


const circlearea = circleArea(12);
console.log("area of circle : ",circlearea);

const circlecumference = circleCircumference(4);
console.log("Circlecircumference of circle : ",circlecumference);




// ------------------------------------------

const respo = obj;
console.log(respo);


