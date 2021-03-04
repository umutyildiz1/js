// UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

//load items
loadItems();

eventListeners();

function loadItems(){
    items = getItemFromLS();
    items.forEach( item => {
        createItem(item);
    })
    
}
function getItemFromLS(){
    if(localStorage.getItem("items") === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}
function setItemToLS(value){
    items = getItemFromLS();
    items.push(value);
    localStorage.setItem("items",JSON.stringify(items))
}
function createItem(value){
    //create li
    const li = document.createElement("li");
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(value))
    //create a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML = '<i class="fas fa-times"></i>';
    
    li.appendChild(a);
    taskList.appendChild(li)
}
function eventListeners(){
    form.addEventListener("submit",addNewItem);
    btnDeleteAll.addEventListener("click",deleteAllItem)
    taskList.addEventListener("click",deleteItem)

}

function addNewItem(e){
    if(input.value ===""){
        alert("Add New Item")
    }
    createItem(input.value); 
    setItemToLS(input.value)  
    input.value = "";
    e.preventDefault();
}

function deleteAllItem(e){
    //taskList.innerHTML = ""; => way 1
    for(let i=taskList.children.length; i>0 ; i--){
        taskList.children[0].remove();
    }
    
    localStorage.clear();
    e.preventDefault();
}
function deleteItem(e){
    
    if(e.target.className ==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();
}
function deleteItemFromLS(value){
    items = getItemFromLS();
    items.forEach((item,index) =>{
        if(item === value){
            items.splice(index,1)
        }
    })
    localStorage.setItem("items",JSON.stringify(items))
}