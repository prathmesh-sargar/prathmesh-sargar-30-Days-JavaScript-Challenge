
// Activity 1 : functionns declaration 

function odd_even(number)
{
    if(number === 1)
    {
        return "1 is neither odd or even "
    }
    else if(number %2 ==0)
    {
        return "even number"
    }else
    {
        return "Odd number "
    }
}
const result = odd_even(1);
console.log( " number is : " ,result);



// Square of number : 

const square = (num)=>{
    return num* num;
}
const squareofnum = square(5);
console.log(` square of number` ,squareofnum);


// Activity 2 : function express 

const bigvalue = (n1,n2)=>{
    if(n1 >n2)
    {
        console.log(`${n1} is grater then ${n2}`);
    }
    else{
        console.log(`${n2} is grater then ${n1}`);
    }
}

console.log(`the result is : `, bigvalue(12,43))  // the result is :  undefined


// write a function to concate two Strings and return a result : 

function concateString()
{
    let str1 = "hello ";
    let str2 = "prathmesh ";

    return  str1+str2
}

const concatestr = concateString();
console.log(concatestr);


// Activity 3 : arrow functions 

const sum = (n1,n2)=>{
    return n1+n2;

}

const sumOfNumbers = sum(12,12);
console.log(sumOfNumbers);


// write a function if string contain specific character or not 

const iftrue = (string,character)=>{
    
    // stringArray = Array.from(string)
    const arr = string.split("")
    // console.log(stringArray);
    let n =0;
    arr.forEach(e => {
        
         if(e === character)
         {
            n ++; 
         } 
    
    });
    if(n>0)
        {
           return true
           
        }else{
           return false;
           
        }   
   
} 
 const istrue =   iftrue("prathmesh", "e")
 console.log(`character is present in string  : ` , istrue);



 // function parameter : 

 const product = (num1, num2 = 12)=>{  // here we are used default parameter value of num2 ok 
    return num1*num2
 }
 const multiplication = product(12);
 console.log(multiplication);  // 144 


 const personinfo = (nam, age =18)=>{  // default value  of age is used here ok 

    console.log(`${nam} your age is ${age} but as a time goes you complete your all dreams 👍`);
 }
personinfo("prathmesh",19)



// Activity 5 : higher order of function 

const higherfun = (callback,n)=>{

    for(let i=0;i<n;i++)
    {
        callback();
    }
}

function sayhello(){
    console.log("Hello");
}

console.log(higherfun(sayhello,5));


//  higher order functions take two function and one value 
//  fun1 take value  
//  fun2 take result 


const applyfun = (fun1 ,fun2 ,value)=>{

    const result1 = fun1(value);    /* fun1(5)  = 10  */
    const result2 = fun2(result1)   /* fun1(10)  = 100 */
    return result2;
}

function mul(num){
    return num *2;
}

function square1(num){
    return num*num
}

const demo = applyfun(mul,square,5)
console.log(demo);

