//name ,age.display :print

class Test{
public name:string="jamsheera"
public age:number=20

public display():void{
    console.log(this.name+  " and "  +this.age)
}
}
let obj=new Test()
obj.display()

console.log("**************************************")
class Student{
    public name:string
    public age:number
    constructor(name:string,age:number)
    {
        this.name=name
        this.age=age
        
    }
    show():void{
        console.log("name" , this.name)
        console.log("age", this.age)
    }
}
let obj1=new Student("arya", 28)
obj1.show()



console.log("****************Add/ subtract**********************")
class Add{
    addition(a:number,b:number):number{
        return a+b;
       
    }

    
        subtraction(a:number,b:number):number{
            return a-b;
            

    }
}
let add=new Add();


console.log(add.addition(20,10))
console.log(add.subtraction(10,5))

//student result -class , object creation tyme name and mark pass cheyanam . result functionil print cheyanam . if mark >20 pass else fail . this 





