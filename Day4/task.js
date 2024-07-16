// Loop  

// write a program to print numbers form 1 to 10 by using for loop ok 

console.log("printing numbers from 1 to 10 using for loop");
for( let i=1;i<=10;i++)
{
 console.log(i);
}

console.log("print table of 5 using for loop");

let n= 5;
for(let i=1;i<=10;i++)
{
    console.log(`${n} X ${i} = ${n*i}`);
}


// Activity 2 : sum of numbers by using 1 to 10 using while loop 

let sum = 0;
let i =1;
while(i<=10)
{
    sum = sum +i;
    i++;
}
console.log("sum of numbers from 1 to 10 is ",sum);



// Write a program to print numbers  from 10 to 0 

console.log("printing numbers from 10 to 0 using while loop");
let j = 10;

while(j>=0)
{
    console.log(j);
    j--;
}

console.log("Write a progam  to print numbers from 10 to 0 using do while loop ");

let num = 10;
do{
    console.log(num);
    num--;

}while(num>=0);



// Write a program to calculate factorial of number using do while loop 

console.log("factorial of given number : ");
let fact = 1;  
let factNum = 5;  // this is used for only checking condition not more then that ok 
let val =1;

// here multiplication take place between val and fact 

do{
    fact = fact*val;
    val++;
   
}while(val<=factNum);

console.log(`factorial of number ${factNum} is ${fact}`);


// Activity 4 : write a program to print patten using nested for loop 

for(let i=0;i<5;i++)
{
    let row = ""
    for(let j=0;j<=i;j++)
    {
       row +=j+1 + " ";
    }
    console.log(row);
}


// Loop control statement : 

for(let i=1;i<=10; i++)
{
    if(i===5)  // we are compare the values equal or not ok 
    {
        continue;
    }
    console.log(i);
}



// break statement : 

for(let i=1;i<=10; i++)
    {
        if(i===5)
            break;
       
        console.log(i);
    }
