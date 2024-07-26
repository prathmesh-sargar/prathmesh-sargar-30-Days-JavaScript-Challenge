// // basic Error handling with try-catch block : 


// function ThrowError(){
//     throw new Error("this is an error ");
// }

// try {
//     ThrowError();
// } catch (error) {
//     console.log(error);
// }


// function divide(a,b){

//     if(b ===0)
//     {
//         throw new Error("this is an error you can't divide by zero ");
//     }
//     return a/b;
// }

// try {
//     const result = divide(12,0);
//     console.log("result : ",result);
// } catch (error) {
//     console.log("error: ",error);
// }



// -------------

// in try catch out of both any one is run not both at same time ok 
// try {
//     console.log("this is try block of the code ok ");
// } catch (error) {
//     console.log("this is catch block of the code  ok ");
// }
// finally{
//     console.log("this is finally block of the code ok ");
// }


// Custom Error objects : 


class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  function validateInput(input) {
    if (!input || input.trim() === '') {
       console.log("this is an error");
      throw new ValidationError('Input cannot be empty.');
     
    }
    return true;
  }
  
  try {
    validateInput(''); // Throws error
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
  



//   ------------------------------------------------------------------------------------------


// here we are creating a new one promise ok : 
const randomPromise = new Promise((resolve,reject)=>{
    const success = Math.random() < 0.5;
    setTimeout(() => {
        if(success)
        {
            resolve("success");
        }
        else{
            reject("failed");
        }
    }, 1000);
})


// here we are handle  promise by using promises ok :  
randomPromise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })



    // here we are handle Promise by using async and await ok : 
    async function getPromisedata(){

        try {
            const response  = await randomPromise;
            if(!response.ok)
            {
                throw new error ("something went wrong");
            }
            const data = response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }   
    }


    // -----------------------------------------------------------------------------

    async function fetchInvalidUrl() {
        try {
          const response = await fetch('https://invalidurl.com');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Fetch error:', error.message);
        }
      }
      
      fetchInvalidUrl();


      
      