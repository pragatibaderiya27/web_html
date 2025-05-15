console.log("this is for funtion call")

let name01 ="priya";
let name02 ="baderiya";
let name04 ="harsh";
let name05 ="asha";
console.log(name01 + "this is for funtion call")
console.log(name02 + "this is for funtion call")
// console.log(name03 + "this is for funtion call")
console.log(name04 + "this is for funtion call")
console.log(name05 + "this is for funtion call")
// this is for function calls fun name + the things u want to print 

let surname = "sharma";
let surname01 = "varma";
let surname02 = "karma";
let surname03 = "gupta";
let greetings ="good morning have a nice day";
 
function greet(surname,greetings=" miss you have an new emails")
{
    // let surname= "miss";
    console.log(greetings+" "+ "mam!");
    console.log("priya "+surname);
}
// for 1 time data print with same content we can write like this 
greet(surname, greetings);
greet(surname01, greetings);
greet(surname02, greetings);
greet(surname03, greetings);
greet(surname03);
// this will call miss u hve email as default value from js 
function sum(a,b,c){
  let d = a + b + c;
//   declartion of function
  return d;
}
 let returnval = sum(1,2,3);
//  and let is intilizinf retunval function name 
//  here sum is f name and call by value is executed 
 console.log(returnval);










