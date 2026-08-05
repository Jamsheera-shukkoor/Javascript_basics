/*
let objectname={
    key1:value1,
    key2:value2
}*/

let student={
    name:"Jamsheera",
    age:27
}
console.log(student.name,student.age)
console.log("***********************************************************");
//object literal with function 
let a={
    firstname:"Arya",
    lastname:"raju",
    fullname:function(){
        console.log(this.firstname+this.lastname)
    }

}
a.fullname()
console.log("firstname:"+a.firstname)
console.log("lastname:"+a.lastname)

let b={
    fruit1:"orange",
    fruit2:"mango",
    fruits:function(){
        console.log(this.fruit1+" "+this.fruit2)

    }
    }
    b.fruits()
    console.log("fruit1:"+b.fruit1)
    console.log("fruit2:"+b.fruit2)

    //add 2 number

console.log("***********************************************************");

//shorthand method - non parameterized function
let employee={
    emp_name:"Anu",
    emp_id:1001,
    register(){
        console.log(this.emp_name+" "+this.emp_id)
    }
}
employee.register()
console.log(employee.emp_id)

console.log("***********************************************************");

//object literal with parameterized function

let student1={
    name1:"geethu",
    study(subject){
        console.log(this.name1+" "+" studying in "+subject)
    }
}
student1.study("maths")


console.log("***********************************************************");
//Object literal with return

let student3={
    name:"Ragi",
    study(subject){
        return this.name+"is studying"+subject
    }

}
let result=student3.study("English")
let result1=student3.study("maths")
console.log(result)
console.log(result1)


