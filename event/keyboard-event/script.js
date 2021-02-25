//keyboard events

const input = document.querySelector("#txtTaskName");
const form = document.querySelector("#addTaskForm");
const select = document.querySelector("#select");

// input.addEventListener("keydown",eventHandler);
// input.addEventListener("keyup",eventHandler);
// input.addEventListener("keypress",eventHandler);
// input.addEventListener("focus",eventHandler);
// input.addEventListener("blur",eventHandler);
// input.addEventListener("cut",eventHandler);//ctrl-x
// input.addEventListener("paste",eventHandler);//ctrl-v
// input.addEventListener("select",eventHandler)
select.addEventListener("change",eventHandler)

form.addEventListener("submit",eventHandler);

function eventHandler(e){
    console.log(`Event type: ${e.type}`);
    // console.log(`Which key is pressed => ${e.key}`)//or e.keyCode(numeric)
    // e.target.style.backgroundColor = "yellow";
    e.preventDefault();
}