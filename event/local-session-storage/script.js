// Local Storage

//set item
localStorage.setItem("firstName","Umut")
localStorage.setItem("lastName","Yıldız")

//get item
let val = localStorage.getItem("firstName")
val = localStorage.getItem("lastName")

// remove item
// localStorage.removeItem("firstName")
// localStorage.removeItem("lastName")

//clear
localStorage.clear();

//set array to storage!!!!!!!!
let hobbies = ["cinema","car","swimming"]
localStorage.setItem("hobbies",JSON.stringify(hobbies))
val = JSON.parse(localStorage.getItem("hobbies"))

console.log(val)
console.log(localStorage)


// Session Storage

// const city = sessionStorage.setItem("city","Istanbul")
// const country = sessionStorage.setItem("country","Turkey")

// console.log(sessionStorage)