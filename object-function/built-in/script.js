//String
let str1 = "umut";
let str2 = new String("umut");

if(str1 == "umut"){
    console.log("yes")
}else{
    console.log("no")
}

console.log(str1)
console.log(typeof str1)
console.log(str2)
console.log(typeof str2)

String.prototype.repeat = function(n){
    return new Array(n+1).join(this)
}
console.log(str1.repeat(3))

// Number
var num1 = 10;
var num2 = new Number(10);

// Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// Object
var obj1 = {
    name : 'umut'
}

var obj2 = new Object({
    name : 'umut'
});


// Array
var arr1 = ['ada','yiğit','sena','çınar'];
var arr2 = new Array('ada','yiğit','sena','çınar');

Array.prototype.remove = Array.prototype.remove || function(member){//if remove method exist from main protype , mine is not working
    var index = this.indexOf(member);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove('sena'));