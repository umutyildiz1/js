function Person(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2021 - this.yearOfBirth;
    }

}

let person1 = new Person("umut",1998,"Software Developer");
let person2 = new Person("semih",2009,"student");

console.log(person1.job);
console.log(person1.name);
console.log(person1.yearOfBirth);
console.log(person1.calculateAge())
console.log("*******************************")
console.log(person2.job);
console.log(person2.name);
console.log(person2.yearOfBirth);
console.log(person2.calculateAge())

