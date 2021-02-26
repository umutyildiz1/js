// Event Bubbling

const form = document.querySelector("form")
const cardBody = document.querySelector(".card-body")
const card = document.querySelector(".card")
const container = document.querySelector(".container")

//bubbling => inner to outer action

// form.addEventListener("click",function(e){
//     console.log("form")
//     e.stopPropagation(); // prevent bubbling
// })

// cardBody.addEventListener("click",function(e){
//     console.log("Card Body")
//     e.stopPropagation();
// })

// card.addEventListener("click",function(e){
//     console.log("card")
//     e.stopPropagation();
// })

// container.addEventListener("click",function(e){
//     console.log("container")
//     e.stopPropagation();
// })

//capturing => outer to inner action

// form.addEventListener("click",function(e){
//     console.log("form")
//     e.stopPropagation();//there is a error because of usage
// },true)

// cardBody.addEventListener("click",function(e){
//     console.log("Card Body")
//     e.stopPropagation();//there is a error because of usage
// },true)

// card.addEventListener("click",function(e){
//     console.log("card")
//     e.stopPropagation();//there is a error because of usage
// },true)

// container.addEventListener("click",function(e){
//     console.log("container")
//     e.stopPropagation();//there is a error because of usage
// },true)

// const deleteItems = document.querySelectorAll(".fa-times")

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target)
//     })
// })

const ul = document.querySelector("ul")
ul.addEventListener("click",function(e){

    if(e.target.className === "fas fa-times"){
        console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
})
