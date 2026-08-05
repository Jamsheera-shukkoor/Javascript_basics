/*for(let i=1;i<=5;i++)
{
    console.log(i)
}*/

//while loop
let i=1
while(i<=5)
{
    console.log(i)
    i++
}

//for.in
let employee={
    name:"Shani",age:30,
    role:"Tester"
}
for(let key in employee){
    console.log(key)
}
//continue
for(let k=1;k<=5;k++)
{
    if(k===3){
        continue;

    }
    console.log(k)
}