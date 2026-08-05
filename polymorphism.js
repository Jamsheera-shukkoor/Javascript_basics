class Person{
    display()
    {
        console.log("i am a person")
    }
}
class Student extends Person{
display(){
    console.log("i am a student")
}
}
let obj=new Student()
obj.display()

console.log("**********************************")

class Person1{
    display1(name){
        console.log("hello"+name)

    }

    }
    class child extends Person1{
        display1(name){
        console.log("Good morning"+name)
    }
}

let obj2=new child()
obj2.display1("Maria")

// using super keyword

class Animal{
    sound(){
        console.log("Animal sound")
    }
}
class Cat extends Animal{
    sound(){
        super.sound()
        console.log("cat sound")
    }
}
let obj3=new Cat()
obj3.sound()

console.log("**********************************************************************")

class student1{
    dis(mark){
        console.log("mark is "+" "+mark)

    }

    }
    class S2 extends student1{
        dis(mark){
            console.log("mark is "+" "+mark)
        }
    }
    let object3=new S2()
    object3.dis(100)







