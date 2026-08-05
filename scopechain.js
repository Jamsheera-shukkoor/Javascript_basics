//scope chain: 
//its a mechanism used to find a variable.
//when you use a variable, javascript first looks in the current scope
//then the next outer scope, and continues untill it reaches the global scope
//if variable is not found anywhere, javascript throws reference error

let name="angel" //global scope
function outer()
{
   let city="kannur" //outer scope
   function inner()
   {
    let age="18" //inner scope
    console.log(age)
    console.log(city)
    console.log(name)
   }
   inner()
}
outer()
