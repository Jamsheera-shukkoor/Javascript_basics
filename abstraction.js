//abstraction is a oops concept that hides the implementation details and show only the essential features to the user.

class Car{
    start()
    {
        console.log("Car start")
    }
    stop()
    {
        console.log("car stop")
    }
}
let obj=new Car()
obj.start()
obj.stop()
//the user only calls start and stop
//the internal eng

class Tv
{
    poweron(){
        console.log("Tv is on")
    }
    poweroff()
    {
        console.log("Tv is off")
    }
}
let obj1=new Tv()
obj1.poweron()
obj1.poweroff()

console.log("*********************************")


class Calculator{
    add(a,b){
        console.log(a+b)
    }
        
    
    subtract(a,b)
    {
console.log(a-b)
    }
    multiply(a,b)
    {
console.log(a*b)
    }
    divide(a,b)
    {
console.log(a/b)
    }
}
let obj2=new Calculator()
obj2.add(10,20)
obj2.subtract(10,5)
obj2.multiply(10,10)
obj2.divide(10,2)