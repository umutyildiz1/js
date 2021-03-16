let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}
// Inherit Prototypes

Teacher.prototype = Object.create(Person.prototype)
console.log(Teacher.prototype.constructor)//Person Constr setted to Teacher Cons and we must handle it
Teacher.prototype.constructor = Teacher;//handled it
console.log(Teacher.prototype.constructor)

Teacher.prototype.greeting = function(){
    return "Hello my name is " + this.name;
}

let umut = new Teacher("umut",1998,"softEng","web");






console.log(umut)
console.log(umut.calculateAge())
console.log(umut.greeting())