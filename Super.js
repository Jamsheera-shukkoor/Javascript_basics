//super keyword
//use inside child clas
//super keyword in javascript is used inside a child classto access the parent class, constructor()method
//syntax:
/* class Parent{
constructor(){
  //parent constructor
}
}
class child extends parent{
constructor(){
 super() //calls parent constructor
}
}*/

class Parent{
    show(){
        console.log("hello")
    }
}
class Child extends Parent{
    show(){
        super.show()
        console.log("Hello world")
    }
}
let obj=new Child()
obj.show()

class Person{
    constructor(name){
        this.name=name

    }
    display2(){
        console.log("parent class name "+this.name)

    }
}
class Student extends Person{
    constructor(name,mark){
        super(name)
        this.mark=mark
    }
    display(){
        console.log(this.name+" "+this.mark)

    }
}
let obj2=new Student("Ann",55)
obj2.display()
obj2.display2()