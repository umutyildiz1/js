/* Selecting Elements */

// Single element Selecting

// getElementById()
// let val;
// val = document.getElementById("header");
// val.style.fontSize = "45px";
// val.style.color = "red";
// val.innerText = "My Todo App"
// val.innerHTML = "<b>My Todo App!</b>"

// console.log(val);

//querySelector()

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".app-title"));
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("li").style.color="red");
// console.log(document.querySelector("li:last-child").style.color="blue");
// console.log(document.querySelector("li:nth-child(2)").style.color="yellow");
// document.querySelector("li:nth-child(3)").textContent="task item";
// document.querySelector("li:nth-child(3)").innerHTML = "<b>Task Item</b>";
// document.querySelector("li").classList.add("active");


// Multiple Element Selecting
// getElementByClassName // collection
// getElementByTagName //collection only for using
// document.querySelectorAll() // returns node list => we can use foreach method

let val;

//  val = document.getElementsByClassName("list-group-item");
//val[0]
// val = document.getElementsByClassName("list-group-item")[2];
// val[2].textContent='new item';
// val[0].style.fontSize="45px";
// for(let i in val){
//     val[i].style.color = "red";
//     val[i].textContent = "new Item"
// }

// document.getElementsByTagName()
val = document.getElementsByTagName("a");
val = document.getElementsByTagName("li");
val = document.getElementById("task-list").getElementsByTagName("a");


// document.querySelectorAll()

val = document.querySelectorAll("li"); // returns node list
val.forEach((item,index) => {
    item.textContent = `${index} - hello`;
})

val = document.querySelectorAll("li:nth-child(odd)");
val.forEach((item) => {
    item.style.background = "blue";
})

console.log(val);
