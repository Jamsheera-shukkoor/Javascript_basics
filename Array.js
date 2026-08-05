//let arrayname=[value1,value2,value3]

//advantages: less code, easy to manage ,easy to access,easy to loop

let student1="Jamsheera"
let student2="Arya"
let student3="Anu"
let student=["Jamsheera","Arya","Anu"]
console.log(student)
//accessing array elements
console.log(student[0])
//changing array elements 

let fruits =['Apple','Orange','Mango']
console.log(fruits)
fruits[1]="Grapes"
console.log(fruits)

//array length
let colour=["Red","Yellow","Green"]
console.log(colour.length)

//array can store different datatypes

let data=["hello",25,true,1.6]
console.log(data)

//adding elements
//adding elemets at the end
/*
let color1=["violet","indigo","blue"]
color1.push("Red")
console.log(color1)
//adding elements at the beginning

let fruits1= ['Apple','Orange','Mango']
fruits1.unshift("banana");
console.log(fruits1)*/

//removiing elements
//removes last element
let num=[1,2,3,4,5,6]
num.pop()
console.log(num)

//removes first element
let num1=[7,8,9,10,11,12]
num1.shift()
console.log(num1)
//looping to array
let fruits2=['Apple','Orange','Mango']
//delete

delete fruits2[1]
console.log(fruits2)

fruits2.splice(1,1)
console.log(fruits2)







