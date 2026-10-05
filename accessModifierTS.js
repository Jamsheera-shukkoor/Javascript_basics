"use strict";
//1.public 2. private 3.protected
/*
intypescript ,access modifiers are used to control where a class property or method can be accessed.


1.public:  public members can be accesssed anywhere.its the default modifier

*/
class Student {
    name = "angel";
    show() {
        console.log(this.name);
    }
}
let obj = new Student();
obj.show();
console.log(obj.name);
//2. private
/* privae members can be accessed only inside the same class.
*/
class bank {
    balance = 1000;
    display() {
        console.log(this.balance);
    }
}
let obj2 = new bank();
obj2.display();
console.log("************************************************");
//3.protected : protected members can be accessed: inside the parent class and inside the child class
class Animal {
    name = "Dog";
    showAnimal() {
        console.log(this.name);
    }
}
class Dog extends Animal {
    showDog() {
        console.log(this.name);
    }
}
let obj3 = new Dog();
obj3.showDog();
obj3.showAnimal();
//console.log(obj3.name)
/* public : everyone can access
   private: only the same class can access
   protected : same class and child class can access 
