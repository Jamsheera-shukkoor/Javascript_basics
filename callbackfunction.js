//callback function is a function passed into another function as an argument , and it is invoked after a specific task is complete
//advantages: This support asynchronous programming .(Api call, downloading a file )
//They execute code only after a task is completed
//they improve application performance and user experience by avoiding unnecessory waiting


function greet()
{
    console.log("hello")
}
function execute(callback)
{
console.log("callback function test")
callback()
}
execute(greet)

//callback with parameter

function display(name){
    console.log("hello"+" "+name)
}
function details(callback)
{
    callback("Angel")
}
details(display)

console.log("***************************")

function foodready()
{
    console.log("waiter: Your Food is Ready")
}
function preparefood(callback)
{
    console.log("Chef: Preparing food")
    console.log("Food is Ready")
    callback()
}
preparefood(foodready)

console.log("**********************************")

//callback hell" callback hell is a situation where multiple callback functions are nested inside one another, making code difficult to read, understand, debug and maintain 
//also called as pyramid of doom
