//  if condition
const age=18;
if(age>=18){
    console.log("you are major");
}
// if else

if(age<=18){
    console.log("you are  minor");
}
else{
    console.log("you are major");
}

// else if
const score=95;
if(score>=90){
    console.log("Excellent");
}
else if(score>=70){
    console.log("good job");
}
else{
    console.log("keep practicing")
}

// switch
 const day="monday"
 switch(day)
 {
    case "monday":
        console.log("start of the week");
        break;
    case "friday":
        console.log("end of the week");
        break;   
    default:
          console.log("regular day");
 }
//  loops
// while
var i=0;
while(i<11){
    console.log(i);
    i++;
}
// for
for(let a=0;a<=10;a++)
    {
    console.log(a);
}
// for in
const person = { name: 'John', age: 30};
for (let key in person) {
console.log(key+':' + person [key]);
}
// for of
const fruits =['apple', 'banana', 'cherry'];
for (let fruit of fruits) 
{
console.log(fruit);
}