

let para = document.querySelector("#para")

let btn = document.querySelector("#btn")
let btn1 = document.querySelector("#btn1")

btn.addEventListener("click",function(){
  
    para.textContent = "red"
})

btn1.addEventListener("click",function(){
   
    para.textContent = "grow "
})

let h = document.querySelector(".h4tag")
let bgdouble = document.querySelector("#bgdouble")


// bgdouble.addEventListener("doubleclick", () => {
//     h.style.backgroundColor = "blue";
// })
  bgdouble.addEventListener("click", () => {
    h.textContent = "Prathmesh";
    h.style.backgroundColor = "red";
  });



/// mouse Events : 

// document.addEventListener("DOMContentLoaded",()=>{

//     let h1 = document.querySelector(".h1tag")
//     h1.addEventListener("mouseenter",()=>{
//         h1.style.backgroundColor = "red"
//     })
//     h1.addEventListener("mouseleave",()=>{
//         h1.style.backgroundColor = "blue"
//     })

// })

// document.addEventListener("DOMContentLoaded",()=>{

//     let h1 = document.querySelector(".h1tag")
   
//     document.addEventListener("keydown",(event)=>{

//         h1.textContent = `Enter Key : ${event.key}`
//         h1.style.backgroundColor = "red"
//     })

//     document.addEventListener("keyup",(event)=>{
        
//         h1.textContent = `Enter Key : ${event.key}`
//         h1.style.backgroundColor = "blue"
//     })

// })


document.addEventListener("DOMContentLoaded",()=>{

    let selectedval = document.querySelector("#mySelect")
    let paraoption = document.querySelector("#displayParagraph");

    selectedval.addEventListener("change",(event)=>{

        paraoption.textContent = `selected option : ${event.target.value}`
    })

})




