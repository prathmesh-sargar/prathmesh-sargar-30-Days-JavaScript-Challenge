
// Activity 1 :  Array creation and access values 

let arr = [1,2,3,4,5];
console.log(arr);

console.log(`first element ${arr[0]}`);
console.log(`last element ${arr[arr.length-1]}`);


// Activity 2 : arrays methods basics 

// push , pop , shift , unshift 

let fruits = ["apple ","banana", "cherry"]

fruits.push("mongo");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Tomato")
console.log(fruits);



// Activity : 3 
// Arrays methods : Intermedicate

// map, filter , reduce 
let ar = [1,2,3,4,5]
console.log(ar);
let maparr = ar.map((item)=> item*2)
console.log(maparr);

let filterarr = ar.filter((item)=> item %2 ==0);
console.log( "filter arr" , filterarr);

// reduce method is used to calculate the sum of elements of given array ok 

let reducearr = ar.reduce((item1,item2)=> item1+item2,0)
console.log("sum of array : ", reducearr);



// Activity 4 : Array Itration

let array = [1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<array.length;i++)
{ 
    console.log(array[i]);
}

console.log("forEach loop ");

array.forEach((item)=>{
    console.log(item);
})


// Activity 5 : multidimensional array 


let matrix = [
    [1,2],
    [3,4]
]
console.log(matrix);
console.log("matrix[1,0] : ", matrix[1][0]);
console.log("matrix elements : ");
for(let i=0 ;i<matrix.length;i++)
{
   
    for(let j = 0;j<matrix[i].length;j++)
    {
       console.log(matrix[i][j]);
    }
  
}

let arru =[ [1],
             []
           ]
console.log(arru.length);
console.log(arru[0].length);


