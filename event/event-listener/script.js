// Using Event Listener 

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");
btn.addEventListener("click",function(e){ //parameter is event object
    console.log("button clicked!");
    
    let val;

    val = e;
    val = e.target;//gives us which button or object is clicked because we can give a function to lots of UI element
    val = e.target.id;
    val = e.target.classList;
    val = e.type;//action type like click mouseover(like hover)
    console.log(val);

    e.preventDefault();//we cancelled scrolling top when link active
 });

// btn.addEventListener("click",btnClicked);
// btn2.addEventListener("click",btnClicked);
// btn.addEventListener("click",btn2Clicked);

// function btnClicked(){
//     console.log("button clicked");
// }

// function btn2Clicked(){
//     console.log("button 2 clicked!")
// }