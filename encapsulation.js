class student{
    #name="Ann"
    getName(){
        return this.#name
    }
}
let obj=new student()
console.log(obj.getName())

console.log("***********************************************")

class person{
    #name1
    constructor(name1){
        this.#name1=name1
    }
    getName1(){
        return this.#name1
    }
    setName1(name2){
        this.#name1=name2
    }
}
let obj1=new person("angel")
console.log(obj1.getName1())
obj1.setName1("maria")
console.log(obj1.getName1())

console.log("***********************************************")

class employee{
    #salary
    constructor(salary){
        this.#salary=salary

    }
    getsalary(){
        return this.#salary
    }
    setsalary(newsalary){
        this.#salary=newsalary
    }
    }
    let emp=new employee(50000)
    console.log(emp.getsalary())
    emp.setsalary(70000)
    console.log(emp.getsalary())


