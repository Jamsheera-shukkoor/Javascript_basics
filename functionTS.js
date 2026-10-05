"use strict";
//syntax:
//function functionname(); Returntype{
// /code }
//parameterised
/*
function functionname(parameter:type):returntype{
//code
}*/
/*

function show(): void{  //void means function doesnt return a value
    console.log("hello")
}
show()
*/
console.log("*************function with 1 parameter********");
function display(name) {
    console.log("hello" + name);
}
display("angel");
console.log("***************************************");
function myTest(num) {
    console.log("the number is" + num);
}
myTest(10);
console.log("*************function with 2 parameter********");
function add(a, b) {
    console.log("Sum is " + (a + b));
}
add(10, 20);
console.log("*************function with returntype********");
function displayString(name) {
    return name;
}
//console.log(displayString("angel"))
let result = displayString("angel");
console.log(result);
console.log("************************************");
//add 2 numbers 
function addNumbers(a, b) {
    console.log("Sum is " + (a + b));
}
add(10, 20);
console.log("*************function with returntype********");
function addNumber(a, b) {
    return (a + b);
}
let sum = addNumber(5, 10);
console.log("sum is " + sum);
console.log("****************find square of a number****************");
function square(a) {
    return (a * a);
}
let squarenum = square(5);
console.log("square is " + squarenum);
console.log("****************check whether a person is eligible to vote****************");
function eligibility(age) {
    let eligible;
    if (age > 18) {
        eligible = "eligible to vote";
    }
    else {
        eligible = "not eligible to return";
    }
    return eligible;
}
console.log("the user is " + eligibility(5));
console.log("****************check even or odd*****************");
function checkEvenOdd(a) {
    if (a % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log("number is" + checkEvenOdd(10));
console.log("****************find the largest of 2 numbers****************");
function largest(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log("largest num" + largest(5, 10));
//anonymous function
/* an anonymous function iin typescript is a function without a function NAME. it is usually ssigned to a variable
*/
console.log("********************basic anonymous function***************");
let show = function () {
    console.log("hello world");
};
show();
console.log("********************parameterized***************");
let display1 = function (name) {
    console.log(name);
};
display1("angel");
console.log("********************parameterized with returntype***************");
let add1 = function (a, b) {
    return a + b;
};
console.log(add1(10, 20));
