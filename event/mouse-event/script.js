//Mouse Events

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list")

//click
//btn.addEventListener("click",eventHandler);

//dblclick
//btn.addEventListener("dblclick",eventHandler);

//mousedown
//btn.addEventListener("mousedown",eventHandler);//moment when pressed
//mouseup
//btn.addEventListener("mouseup",eventHandler);//moment we stop pressing the button

//mouseenter
// ul.addEventListener("mouseenter",eventHandler);
//mouseleave
// ul.addEventListener("mouseleave", eventHandler);

//mouseover
// ul.addEventListener("mouseover",eventHandler);
//mouseout
// ul.addEventListener("mouseout", eventHandler);
//difference between enterleave and overout => enterleave are not triggered when mouse passes different child element but overout are.

//mousemove
//we can get coordinate info from event object
const h5 = document.querySelector("h5");
ul.addEventListener("mousemove",eventHandler);


function eventHandler(e){
    console.log(`event type : ${e.type}`)
    h5.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`
}