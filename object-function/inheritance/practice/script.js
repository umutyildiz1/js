function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function(){
    console.log(`Hello my name is ${this.name}`)
}
function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;

}
Teacher.prototype = Object.create(Person.prototype);
Teacher.constructor = Teacher;
Teacher.prototype.teach = function(){
    console.log(`I teach ${this.branch}`)
}

function Student(name,number){
    Person.call(this,name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.constructor = Student;
Student.prototype.study = function(){
    console.log(`My student num is ${this.number}`)
}

function Headmaster(name,branch){
    Teacher.call(this,name,branch);
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.constructor = Headmaster;
Headmaster.prototype.share = function(){
    console.log("All works are shared")
}
let p = new Person("umut");
p.Introduce()

let t = new Teacher("Teacher Umut","math");
t.Introduce()
t.teach()

let s = new Student("UMUT","216CS2030");
s.Introduce()
s.study()

let h = new Headmaster("UmUt","Physics")
h.Introduce()
h.teach()
h.share()