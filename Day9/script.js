 

 let h2 = document.getElementById("heading");

 let bgconvert = document.getElementsByClassName("divbg")


 setTimeout(() => {
   
    h2.textContent = "this is h2 ok ";
    bgconvert[0].style.backgroundColor = "blue";
 }, 3000);


 const elementcreate = document.createElement("div")

//  elementcreate.textContent = "hello this is create div element ok "

 document.body.append(elementcreate)
//  div.appendchild(elementcreate)


let li = document.createElement("li");
li.textContent = "this is li element hi";
let ul = document.querySelector("ul");
ul.append(li)

// Activity 3 : remove element : 

let li1 = document.querySelector("li");  // here that  particular element 

// li1.remove()


let divgrp = document.querySelector(".para")
// here remove 3rd element from divgrp div tag ok 
let treepara = divgrp.getElementsByTagName("p")[2]  
treepara.remove()


// modifying atribute and classes ok 

let image = document.querySelector("img")
// here we are change the scr atribute ok 
image.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
// image.removeAttribute("src")  here it is used  for remove atribute ok 
image.setAttribute("alt","tree")



let idbg = document.getElementById("idbg")

let bg = document.querySelector(".bg")

// bg.removeAttribute("class")  //  here we can remove the style as well ok 

idbg.removeAttribute("id") //  here 



let changecontext = document.querySelector(".changecontext")

let btn = document.querySelector("#btn")

let a = 0;
btn.addEventListener("click",function(){
   

    if(a==0)
    {
        changecontext.textContent = "change context ok "
        changecontext.style.backgroundColor = "red"
        changecontext.style.color = "white"
        a =1
    }
    else
    {
        changecontext.textContent = "change context ok "
        changecontext.style.backgroundColor = "black"
        changecontext.style.color = "white"
        a = 0;
    }
 
})


let bgborder = document.querySelector(".move")

let c = 0
bgborder.addEventListener("mouseover", ()=>{

     bgborder.style.border = "5px solid red"
})

bgborder.addEventListener("mouseout", ()=>{

    bgborder.style.border = "none"
})


