//for loop
//even no. sum 1-10
//1-10 number sum

let sum=0
for(let i=2;i<=10;i=i+2)
{
    sum=sum+i
}
console.log(sum)

let total=0
for(let i=1;i<=10;i++)
{
    total=total+i
}
console.log(total)

//if-else
//check even/odd number
//voting eligiblity

//if-else if
//largest of 2 number
//positive negative or zero

//switch
//grade 
//trafic signal

//function
//check even or odd
//find square of a number 
//check positive or negative 


let num=5
if(num%2==0)
{
    console.log("even number")
}
else{
    console.log("odd number")
}

let age=19
if(age>=18)
{
    console.log("eligible to vote")
}
else{
    console.log("not eligible ")
}

//if-else-if

let a=20,b=30
if(a>b)
{
    console.log(a)
}
else if(a==b)
{
    console.log("both are same ")
}
else{
    console.log(b)
}

//positive negative or zero 

let k=50
if(k>0)
{
    console.log("positive number")
}
else if(k==0)
{
    console.log("zero")
}
else{
    console.log("negative number")
}

//switch :-grade
//syntax
/*switch(expression){
    case value1:
        //code
        break;
        case value2:
            //code
            break;
            default:
                //code to run if no case matches
}*/
let grade ="E"
switch(grade){
    case "A":
        console.log("Excellent")
        break;
        case "B":
        console.log("Good")
        break;
        case "c":
            console.log("average")
            break;
            default:
                console.log("fail")
                



}

//TRAFFIC SIGNAL

let signal="yellow"
switch(signal){
    case "red":
        console.log("stop")
        break;
        case "yellow":
        console.log("Ready")
        break;
        case "green":
            console.log("go")
            break;
            default:
                console.log("not ready")



}
