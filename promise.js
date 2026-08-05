// promise is an object that represents eventual completion or failure of an asyncronous operation and resulting value

/*
const promise=new Promise((resolve,reject)=>{
    let success=false
    if(success){
        resolve("Login successfull")
    
    }
    else{
        reject("login Fail")
    }
})
promise
.then(result=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("Request finished"))
*/
console.log("***********************************")
    //voting eligibility

let eligiblity=20
const vote = new Promise((resolve,reject)=>{
    
    if(eligiblity>=18){

    
        resolve("eligible to vote")
    
    }
    else{
        reject("not eligible")
    }
})
vote
.then(result=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("Verification complete"))