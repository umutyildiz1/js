let val;

let person ={
    name : "Umut",
    surname : "Yıldız",
    age : "23",
    hobbies : ["fitness", "basketball"],
    address : {
        city : "İstanbul",
        country : "Turkey"
    },
    getBirthYear : function(){
        return 2021 - this.age;
    }
}
val = person;
val = person.name;
val = person["name"] // different perspective code
val = person.surname;
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.address["city"];
val = person.address["country"];
val = person.address.country;
val = person.getBirthYear();



console.log(val);
console.log(typeof val)