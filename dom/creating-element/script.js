//creating elements

const li = document.createElement("li");

//add class
li.className = "list-group-item list-group-item-secondary";
//li.id
// add attribute

li.setAttribute("title","new item");

// text node

//const text = document.createTextNode("new item");

//create relation

//li.appendChild(text);
li.innerText = "new item";
const a = document.createElement("a");
a.className = "delete-item float-right";
a.setAttribute("href", "#");
a.innerHTML = '<i class="fas fa-times"></i>'

// append a to li

li.appendChild(a);

//li to ul
 const ul = document.querySelector("#task-list");
 ul.appendChild(li);

console.log(li);