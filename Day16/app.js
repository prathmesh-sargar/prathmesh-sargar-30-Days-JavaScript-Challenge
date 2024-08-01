// // localStorage.setItem(key, value): Saves data in localStorage.

// // localStorage.getItem(key): Retrieves data from localStorage.

const myname = "ram";

localStorage.setItem("name",myname)

const retrivedata = localStorage.getItem("name");
console.log(retrivedata);

const mynameval = document.querySelector("#mynameval");
mynameval.textContent = retrivedata

// // Task 2: Save and Retrieve an Object

const userdemo = {
    name : "prathmesh",
    age : 19,
    role : "College student",
    gender : "Male"
}

// localStorage.setItem("user",user)

 const dataJSON = localStorage.setItem("user",JSON.stringify(userdemo))

 const dataObj = JSON.parse(localStorage.getItem("user"))

// const userdata = document.querySelector("#userdata")

userdata.textContent =

console.log(dataJSON);
console.log(dataObj);

// JSON.stringify(object): Converts an object to a JSON string.

// JSON.parse(string): Parses a JSON string back to an object.

// -----------------------------------------------------------------------------------------------

const form = document.getElementById("userForm");
const userDataDiv = document.getElementById("userData"); // here we are display the data ok

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const user = { name, email };
  localStorage.setItem("user", JSON.stringify(user));

  displayUserData();
});

function displayUserData() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    userDataDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
  }
}

const USER = JSON.parse(localStorage.getItem("user"));

if (USER) {
  console.log("User is login ");
} else {
  console.log("User is not found ");
}
// Display saved data on page load
displayUserData();

//   localStorage.removeItem(key):     Removes a specific item from localStorage

// Log localStorage content before removal
console.log("Before removal:", localStorage);

// Remove an item from localStorage
localStorage.removeItem("user");

// Log localStorage content after removal
console.log("After removal:", localStorage);

// -------------------------------------------------------------------------------------
