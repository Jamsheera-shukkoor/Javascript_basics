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
try{
    console.log("Hello")
}
catch(error)
{
    console.log("error "+error.message)

}

finally{
    console.log("this is always execute")
    
}

