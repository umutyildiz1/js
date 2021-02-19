var firstName = "       Umut";
var lastName = "Yıldız";
let val;
var hobbies = "sinema,spor,yazılım"

//string concat(...strings) it combines all string parameters and return a string

val = firstName.concat(" ",lastName,".");

//length (property !method)
//val = val.length;

val = val.toLocaleUpperCase();
val = val.toLocaleLowerCase();

//val = val.indexOf("y")
//val = val.replace("umut","kemal") changing strings
//******************** */
//same work
//val = val.slice(3,7) 
//val = val.substring(3,7)


//trim() remove spaces at start and end
//val = val.trim();
//split() seperates substring according to property and return an array
val = hobbies.split(",");

console.log(val);
console.log(typeof val)
