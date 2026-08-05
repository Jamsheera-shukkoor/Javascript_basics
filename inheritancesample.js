//reuse existing code, reduce code duplication,code orgnization improves, make maintanance easier
//syntax
/* class Parent
{
}
class Child extends Parent
{


}*/

class Dog
{
    walk(){
        console.log("walkking")
    }

}
class BabyDog extends Dog
{
    eat(){
        console.log("eating")
    }

}
let B=new BabyDog()
B.eat()
B.walk()

//constructor syntax:-
/*class ClassName{
constructor(){
}
}*/

class Student{
    constructor(){
console.log("constructor is called")

    }
}
let obj=new Student()

class Student2{
    constructor(){
        this.name="Anu"
        this.age=10
        
    }
}
let obj1=new Student2()
console.log(obj1.name)
console.log(obj1.age)


//constructor with parameter 

class Student3{
    constructor(name,age){
        this.name=name
        this.age=age
        
    }
}
let obj2=new Student3("Anu",10)
console.log(obj2.name)
console.log(obj2.age)


