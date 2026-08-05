/*class Parent{
}
class Child1 extends Parent{
}
class Child2 extends Child1{
}*/

class Grandparent{
    display(){
        console.log("this is a grandparent class")
    }
    
}
class Parent extends Grandparent{
    show(){
        console.log("this is parent class")
        

    }
}

class Child extends Parent{
    print(){
        console.log("this is child class")

    }
}
let obj=new Child()
obj.print()
obj.show()
obj.display()

console.log("***************************************************")

class Number1{
    Firstnum(){
        this.num1=10
    }
}

class Number2 extends Number1{
    Secondnum(){
        this.num2=30
    }
}
class Add extends Number2{
    Sum(){
        let a=this.num1+this.num2
        console.log(this.num1)
        console.log(this.num2)
        console.log("sum "+a)
    }
}
 let obj5=new Add()
 
 obj5.Firstnum()
 obj5.Secondnum()
 obj5.Sum()
