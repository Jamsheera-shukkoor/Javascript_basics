//class :- collection of object

/* 
syntax
class classname{
}
*/

class student{
    name="jamsheera"

}
let obj=new student() //let objectname=new classname() : -syntax for object creation
console.log(obj.name)

console.log("****************************************************************")

class student1{
    name="Arya"
    display(){
        console.log(this.name)
    }
}
let obj1=new student1()
obj1.display()