// Function Declarations

// function sum(a,b){
//     let c = a + b;
//     return c;
// }
// console.log(sum(10,20));






//Function Expressions

const sum = function(a,b=5){
    let c = a + b;
    return c;
}

console.log(sum(10,20));
console.log(sum(10)); // returns NaN when b has no default value because b is undefined
console.log(sum(10,20,40,50)); // returns true value and other parameters ignored
console.log(sum(20))