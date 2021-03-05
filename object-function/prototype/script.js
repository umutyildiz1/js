// Prototype(Inheritance in Java)

function Person(name, job, yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
    
}

Person.prototype.calculateAge = function(){
    return 2021 -this.yearOfBirth;
}
Person.prototype.getName = function(){
    console.log(this.name);
}

let umut = new Person("umut","softDev",1998)
let semih = new Person("semih","student",2009)

console.log(umut.calculateAge())
console.log(umut)
umut.getName();
console.log("**************************")
console.log(semih.calculateAge())
console.log(semih)