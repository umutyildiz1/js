// UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewItem);
    btnDeleteAll.addEventListener("click",deleteAllItem)
    taskList.addEventListener("click",deleteItem)

}

function addNewItem(e){
    if(input.value ===""){
        alert("Add New Item")
    }
        //create li
        const li = document.createElement("li");
        li.className="list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(input.value))
        //create a
        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute("href","#");
        a.innerHTML = '<i class="fas fa-times"></i>';
        
        li.appendChild(a);
        taskList.appendChild(li)
        
        input.value = "";
        
    

    
    e.preventDefault();
}

function deleteAllItem(e){
    //taskList.innerHTML = ""; => way 1
    console.log(taskList.childNodes)
    for(let i=taskList.children.length; i>0 ; i--){
        taskList.children[0].remove();
    }
    
    
    e.preventDefault();
}
function deleteItem(e){
    
    if(e.target.className ==="fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}