//object create

let personProto = {
    calculateAge : function(){
        return 2021 - this.yearOfBirth;
    }
}

let umut = Object.create(personProto);
umut.yearOfBirth = 1998;

let semih = Object.create(personProto,{
    name : {value : "semih"},
    yearOfBirth : {value : 2009},
    job : {value : "student"}
})


console.log(umut)
console.log(umut.calculateAge())
console.log("**************")
console.log(semih)
console.log(semih.calculateAge())