//a closure is a javascript feature where an inner function can access and remember the variables of its outer function even after the outer function
//even after the outer function has finished executing

function outer()
{
    let name ="Maria"
    function inner()
    {
        console.log(name)
    }
    return inner
}
const x=outer()
x()