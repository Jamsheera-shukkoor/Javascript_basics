//a variable is a container used to store a value . in typescript , we can declare a variable using
//let , const or var . and we can specify its datatypes 

//syntax
//let variableName: datatype=value

//use let when the vale can be changed 
 
let age:number =30
age =20
console.log(age)

//const
//use const when the value should not be re-assigned
 const mark:number =100
 console.log(mark)

 //var
 //var is also used to declare variables , but in modern ts or js , let and const are generally preferred

 var name1:string="Angel"
 console.log(name1)

 //datatypes
 //1. string : used to store text. eg: let name:string ="angel"
 //2.number: used to store number : let age:number=25
 //3.boolean:used to store true/false eg: let value:boolean=true
 //4.array:used to store multiple value :  let fruits:string[]=["apple","banana","grape"]
 //any: can store any type of value : let value:any=10
