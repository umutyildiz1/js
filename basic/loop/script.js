//loops in Array & Objects

let cars = ["BMW", "Toyota", "Mercedes", "Volvo"];
let people = [
    {firstName : "Ada", lastName : "Yıldız"},
    {firstName : "Umut", lastName : "Yıldız"},
    {firstName : "Semih", lastName : "Yıldız"},
    {firstName : "Furkan", lastName : "Yıldız"}
];

//for in loop array
/*for(let i in cars){// i gives us index number
    console.log(`index : ${++i} value : ${cars[i]}`)
}*/


//for each array

/*cars.forEach(function(car){
    console.log(car)
});*/

/*********************************************************************** */

//Object Loops

/*for(let i=0; i < people.length; i++){
    console.log(people[i].firstName)
}

for(let i in people){
    console.log(`Name : ${people[i].firstName} Surname : ${people[i].lastName}`)
}

people.forEach(function(person){
    console.log(`Name : ${person.firstName} Surname : ${person.lastName}`)
});*/

//map => returns a new array instead of given function

let val = people.map(function(person){
    return `${person.firstName} ${person.lastName}`
})
console.log(val)

let numbers = [1,2,3,4,5,11,15];
let sqrtNum = numbers.map(function(num){
    return num * num;
})
console.log(sqrtNum)