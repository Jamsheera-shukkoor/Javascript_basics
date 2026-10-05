"use strict";
//name ,age.display :print
class Test {
    name = "jamsheera";
    age = 20;
    display() {
        console.log(this.name + " and " + this.age);
    }
}
let obj = new Test();
obj.display();
console.log("**************************************");
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log("name", this.name);
        console.log("age", this.age);
    }
}
let obj1 = new Student("arya", 28);
obj1.show();
console.log("****************Add/ subtract**********************");
class Add {
    addition(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }
}
let add = new Add();
console.log(add.addition(20, 10));
console.log(add.subtraction(10, 5));
