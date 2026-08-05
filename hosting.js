//hosting is javascript default behaviour of moving declaration to the top of there scope befoe the code is executed
console.log(a)
var a=10
console.log(a)
//var variables are hoisted and initialised with undefined

//let and const are hoisted but remains TDZ(Temporal dead zone)untill their declaration is reached

console.log("*******************************************")
/*
console.log(b)
let b=1
console.log(b)

console.log(c)

const c=1
console.log(c)

console.log("****function****")*/

greet1()
function greet1()
{
    console.log("function test")

}
//function hoisting is the javascript behaviour where function declarations are moved to memory before the code is executed
//because of this you can call a function before its declaration 

