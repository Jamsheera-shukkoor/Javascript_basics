//common js :CJS
//ES Modulle:ESM

//IN JAVASCRIPT , Common JS and ES modules are two different module systems used to organise and share code 
//module: a module is a javascript file that contains variables, functions or classes that can be exported and imported into another file

// what is common js
//common js is the older module system , it uses require() to import modules
// module.exports to export them

//what is ES module ? are the modern javascript module system
//it uses import and export keywords
//common js example
//math.js
//-------------
/*
function add(a,b)
{
    return a+b
}
    module.exports= add*/
    

    //app.js
    //---------------
    //const add=require("./math.js")
    //console.log(add(10,5))

    //ESM Example
    //math.js
    //-------------------
    //export function add(a,b){
    //return a+b
    //}

    //app.js
    //---------------
    //import{add} from "./math.js"
    //console.log(add(10,4))

    //for playwright
    //npm install @playwright/test

    //File Handling
    //file handling in javascript means creating , reading ,writing ,updating ,deleting ,...etc using the building FS (file system)module.

    //FS Module
    //node.js provide a built-in module is called FS System
    //common js
    //const variable name=require("fs")

    //ES Module
    //import variablename from "fs"