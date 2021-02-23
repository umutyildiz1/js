const taskList = document.querySelector("#task-list");

// removing element

//taskList.remove();
// taskList.childNodes[1].remove();
// taskList.children[1].remove();
// taskList.removeChild(taskList.children[0]);


//removing attribute

// taskList.children[0].removeAttribute("class");

// for(let i = 0; i < taskList.children.length; i++){
//     taskList.children[i].removeAttribute("class");
// }

// replacing elements

// const cardHeader = document.querySelector(".card-header");
// console.log(cardHeader);

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");

// h2.appendChild(document.createTextNode("App Title"))

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// Classes replacing
let val;

link = taskList.children[0].children[0];

// val = link.className;// a string contains classes
// val = link.classList; // a list all classes
// val = link.classList[0];
// val = link.classList[1];
link.classList.add("new");
link.classList.remove("new");

//attributes

val = link.getAttribute("data-id")
val = link.getAttribute("href")
val = link.setAttribute("href","umut")

val = link.hasAttribute("href")

console.log(val);