// Save a string value to sessionStorage
sessionStorage.setItem("mySessionString", "Hello, SessionStorage!");

// Retrieve the string value from sessionStorage
const retrievedSessionString = sessionStorage.getItem("mySessionString");

console.log(retrievedSessionString); // Logs: "Hello, SessionStorage!"

// Here we are write code for Session Storage to store the data

const myinfo = {
    Myname : "prathmesh",
    Role : "MLSA Tech team",
    Year : "SY CSE (DS)"
}
sessionStorage.setItem("myRole",JSON.stringify(myinfo))

const  retrievedata = sessionStorage.getItem("myrole")

// JSON.stringify(object) ---> Convert an object String to JSON Streing

// JSON.parse(String)  ---> Convert JSON String to object

// form data in Session storage

const sessionForm = document.getElementById("sessionForm");
const sessionUserDataDiv = document.getElementById("sessionUserData");

sessionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("sessionName").value;
  const email = document.getElementById("sessionEmail").value;

  const user = { name, email };
  sessionStorage.setItem("sessionUser", JSON.stringify(user));

  displaySessionUserData();
});

function displaySessionUserData() {
  const user = JSON.parse(sessionStorage.getItem("sessionUser"));
  if (user) {
    sessionUserDataDiv.textContent = `Name: ${user.name}, Email: ${user.email}`;
  }
}

// Display saved data on page load
displaySessionUserData();

// remove items

// Log sessionStorage content before removal
console.log("Before removal:", sessionStorage);

// Remove an item from sessionStorage
sessionStorage.removeItem("sessionUser");

// Log sessionStorage content after removal
console.log("After removal:", sessionStorage);
