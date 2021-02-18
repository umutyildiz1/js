let num;

//num = Number("10");
//num = Number("a10"); => returns NaN not a number 
//num = Number("20a"); => returns NaN not a number
//num = parseInt("a20"); => returns NaN not a number because position of a is starting point
//num = isNaN("a10"); => returns true
//num = isNaN("10a"); => returns true

let val = 10.123242344;
//num = val.toPrecision(5); => it takes parameters number with integer part and exponential part together 
//num = val.toFixed(5); => only exponential part counted by parameter

num = Math.PI;
num = Math.round(2.34546)
num = Math.round(2.74546)
num = Math.ceil(2.65)
num = Math.ceil(2.25)
num = Math.floor(2.56)
num = Math.floor(2.16)
num = Math.abs(-150) // absolute value
num = Math.sqrt(64)
num = Math.pow(2,4)
num = Math.min(1,2,3,4,5,6,7,8)
num = Math.max(1,2,3,4,5,6,7,8)
num = Math.random();

console.log(num)
console.log(typeof num)