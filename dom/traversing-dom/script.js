// traversing dom

let val;
let list;

list = document.querySelector(".list-group")
val =list;
val = list.childNodes;//node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;// returns 3 it is text type
val = list.childNodes[1].nodeType;// return 1 it is element type


val = list.children;//collection
val = list.children[1];
val = list.children[1].nodeName;
val = list.children[1].nodeType;
val = list.children[2].textContent = "new item";
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentElement;
val = list.parentNode;
val = list.parentNode.parentNode

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;

for(let i = 0; i < list.children.length; i++){
    console.log(list.children[i])
}

console.log("**********************************")
for(let i = 0; i < list.childNodes.length; i++){ // we can control elements with if blocks
    if(list.childNodes[i].nodeType === 1)//elements
    console.log(list.childNodes[i])
}

console.log(val);