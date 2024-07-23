
// Activity 1 : object creation and access 

let book = {
    title : "The epic sheet",
    Author: "Ankur woriku",
    year : 2022
}

console.log(book);
console.log(book.title);
console.log(book.Author);


console.log(book.title.toString());

book.year = 2024;
console.log(book);



// create nested book library management  library 

let bookLibrary = {
    
 book1  :{
        bookname: "abc",
        Author: "rakesh",
        year : 2023
    },
    book2  :{
        bookname: "the warrior ",
        Author: "sonar",
        year : 2022
    }

   

}
console.log(bookLibrary);

console.log(bookLibrary.book1.Author);  // access partiular value form given objects ok 


// Activity 4 : this keyword 


var title = "my boy"  
let bookmala = {
    title : "SMART",
    greet : function(){
        console.log("you are ",this.title);
    }
}
bookmala.greet()



// Activity 5 : Object Itrations 

let bookstore = {
    
    title: "sex baba ",
    Author : "pravin Desai",
    year : 2023
}

for(let key in bookstore)
{
    console.log(` ${key } :  ${bookstore[key]}`);

}


// used of Object.key   and Object.values  to get keys and values ok 

console.log(Object.keys(bookstore));

console.log(Object.values(bookstore));

console.log(Object.entries(bookstore));

let aadubook = {
    gfname: "Sanika"
}
// adding one object to another objects   combine object data's 
console.log(Object.assign(bookstore , aadubook));

