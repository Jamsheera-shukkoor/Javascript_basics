//exception handing in javascript i s amechanism used to detect and manage runtime errors
//so that your programme doesnot crash unexpectedly
//keywords:
//1.Try- Contains code that may throw an error
//2.catch - Handles the error if one occurs
//3.Finally - Executes regardless of whether an error occured
//4. Throw - Used to create and throw custom errors

//syntax
 
/*
try{
//code that may cause an error
}
catch(error)
{
//code to handle the error
}
finally
{
  //code that always run

}*/

//using try and catch
//sample pgm
/*
try{
    let result=10/x
    console.log(result)
}
catch(error)
{
    console.log("an error occured",+error.message)
}*/

//using finally 
/*
try{
    console.log("Hello")
}
catch(error)
{
    console.log("error "+error.message)

}

finally{
    console.log("this is always execute")
    
}*/

//Thrw keyword is used to manually create an exception in javascript
//1. it stops the normal execution of the programme 
//2. it send the error to the catch block

//why do we use throw in javascript?
//1.  to manually generate an exception 
//2.it validate user input
//to stop programme execution when an invalid condition occurs
//4.to transfer control to the catch block with a custom error message

//difference between throw and catch
//Throw.
//used to create an exception
//used iinside try block(or any function)
//create custom error message

//catch.
//used to handle an exception
//used after the try block
//display or handle error message 

//syntax
//throw new error("error message")
/*

let age =15
try{
    if(age<18)
    {
        throw new Error("you are not eligible to vote")
}
     console.log("you can vote")
}
catch(error){
    console.log("error message :"+error.message)
}
    */

console.log("********************************************")

//positive number check

let num=-3
try{
    if(num<0){
        throw new Error("this is negative number")
    }
    console.log("positive num is"+num)
}
catch(error){
    console.log("error message: "+error.message)
}

//withdraw money
let balance=500,withdraw=1000
try{
    if(balance<withdraw)
    {
        throw new Error("insufficient balannce")
    }
    console.log("transaction accepted")
    
}
catch(error){
    console.log("error message :"+error.message)
}


//mark valuation, lessthan 0 greaterthan 100 = invalid mark

let mark =-80
try{
    if(mark<0||mark>100){
        throw new Error("invalid mark")
        }
        console.log("valid mark")
    }
catch(error){
    console.log("error message "+error.message)
}

