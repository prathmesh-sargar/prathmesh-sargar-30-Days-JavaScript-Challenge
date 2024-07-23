
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('This is the resolved message after 2 seconds.');
//     }, 2000);
//   });
  
//   promise1.then((message) => {
//     console.log(message);
//   });
  


//   const  promise2 = new Promise((reject)=>{
//    setTimeout(()=>{
//     reject("This is the rejected message after 2 seconds.")
//    },2000)

//   })

//   promise2
// //   .then((message)=>{
// //     console.log(message);
// //   })
//   .catch((error)=>{
//     console.log(error);
//   })



   //  Here I am creating one promise ok  which name is fetchdata and it will resolve after 2 seconds.
//   const fetchdata =new Promise((resolve)=>{
//    setTimeout(()=>{
//     resolve("This is the resolved message after 2 seconds.")
//    },2000)

//   })

  //  here we are used promise chaining for handle this requiest  ok 
// fetchdata
// .then((message)=>{
//      console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })

  // Here we are used async await to handle the promise
//   async function fetchdataset(){
//    try {
//      const data = await fetchdata;
//      console.log(data);

//    } 
//    catch (error) {
//       console.log(error);
//    }

//   }
//   fetchdataset();



  // fetching data by using promises and console log that value ok 


   

 // fetch data by using async and await  and console log that values ok 

//  async function fetchdata(){

//  const url = 'https://global-stock-news.p.rapidapi.com/feed/translated?symbol=AAPL%2C%20AMZN%2C%20MSFT&target_lang=zh';
//  const options = {
//      method: 'GET',
//      headers: {
//          'x-rapidapi-key': '500cbb2724mshec36e2df74939b4p1acb6cjsnbd09e60f82aa',
//          'x-rapidapi-host': 'global-stock-news.p.rapidapi.com'
//      }
//  };
 
//  try {
//      const response = await fetch(url, options);
//      const result = await response.json();
//      console.log(result);
//  } catch (error) {
//      console.error(error);
//  }

// };

// fetchdata();


const fetchdata = async()=>{

   try {
     const response = await fetch("https://official-joke-api.appspot.com/random_joke")
     const data = await response.json();
     console.log(data.setup);
   } catch (error) {
      console.log(error);
   }
}

// fetchdata()



// Prathmesh Sargar github URL : https://api.github.com/users/prathmesh-sargar

const fetchGitUserdata = ()=>{

    fetch("https://api.github.com/users/prathmesh-sargar")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(`data : ${data} 
            
            user : ${data.login}
            bio : ${data.bio}`)
       
    })
    .catch((error)=> console.log(error))

}


// fetchGitUserdata();


const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise A resolved');
  }, 1000);
});

const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise B resolved');
  }, 2000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise C resolved');
  }, 3000);
});

// for handling multiple promises we are used 
// Promise.all([promiseA, promiseB, promiseC])

Promise.all([promiseA, promiseB, promiseC, fetchGitUserdata(),fetchdata()])
  .then((values) => {
    console.log(values); // ['Promise A resolved', 'Promise B resolved', 'Promise C resolved']
  })
  .catch((error) => {
    console.error('Error:', error);
  });
