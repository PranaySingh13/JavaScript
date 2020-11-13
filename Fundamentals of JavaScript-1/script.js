/*
For MultiLine Comment
*/

//----1----
// Linking a JavaScript File
let js='amazing';
console.log(10+20+30+40);

//----2----
//Values and Variables
console.log("Jonas");
console.log(40);

//Declaring a variable
//String can be declare in Single and double quotes both.
let firstName="Matilda";
console.log(firstName); //whenever we need to output something from our code.
console.log(firstName);
console.log(firstName);

//Variable naming conventions
let jonas_matilda="JM";
let $function=27;
let person="jonas";
let PI=3.1415;// constant no. can be store in capitals.

let myFirstJob="Coder";
let myCurrentJob="Teacher";
let job1="Programmer";
let job2="Teacher";

console.log(jonas_matilda,$function,person,PI,myFirstJob,myCurrentJob,job1,job2);

//----3----
//Data Types

//Assigning Boolean DataType
let javaScriptIsFun=true;
console.log(javaScriptIsFun);

//Type of will return the dataType of variable
console.log(typeof javaScriptIsFun);
console.log(typeof 40);
console.log(typeof 'Jonas');

//JS has Dynamic Typing(data types are determined automatically we dont have to reassign.)
javaScriptIsFun="YES!";
console.log(typeof javaScriptIsFun);

//Undefined Datatype
let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);

//Null Datatype
console.log(typeof null);

//----4----
//let, const and var
//let should be use when we have dynamicity.
let age=30;
age=31;

//const value should be final value in your program
const birthYear=1991
// birthYear=1990; //Uncaught TypeError: Assignment to constant variable.

//const job; // Uncaught SyntaxError: Missing initializer in const declaration

//legacy way(old way)
var job="Programmer";
job="Teacher";

//declaring direct variables without let is not good practice
lastName="Schmedtmann";
console.log(lastName);

//----5----
//Basic Operators

//Math Oprerators
const now=2037;
const ageJonas=now-1991;
const ageSarah=now-2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas*2,ageSarah/10,2**3);
//Here 2**3 means 2 to the power of 3 = 2*2*2
