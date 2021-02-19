//template literals

var _name = "Umut Yıldız";
var city = "Istanbul";
var birth = 1998;

let val;

val = "I\'m " + _name + ". I live in " + city + "." + " I am " + (2021-birth)+ " years old";

val = ` I'm ${_name}. I live in ${city}. I am ${(2021-birth>=18?"over 18":"under 18")}.`

console.log(val);