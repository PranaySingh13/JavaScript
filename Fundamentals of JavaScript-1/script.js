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

const name1='Jonas';
const name2='Schmedtmann';
console.log(name1+' '+name2);//concatenation of string

//Assignment Operators
let x = 10 + 5;
console.log(x);
x+=10;//x=x+10=25 
console.log(x);
x*=10;//x=x*10=250
console.log(x);
x++;//x=x+1; preincrement
console.log(x);//x=251
x--;//x=x-1; predecrement
console.log(x);//x=250

//Comparison Operators
console.log(ageJonas>ageSarah); // <,>,<=,>=
console.log(ageSarah>=18);

const isFullAge=ageSarah>=18;
console.log(isFullAge);
console.log(now-1991>now-2018);

//----6----
//Operator Precedence(Order of Operator Loading)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a,b;
a=b=25-10-5;//a=b=10,a=10
console.log(a,b);

const averageAge=(ageJonas+ageSarah)/2;
console.log(ageJonas,ageSarah,averageAge);

//----7----
//Strings and Template Literals
const name3='Jonas';
const job3='teacher';
const birthYear1=1991;
const year1=2037;
const jonas1="I'm " +name3+', a '+(year1-birthYear1)+' years old '+job3+' !';
console.log(jonas1);

console.log('String with \n\
multiple \n\
lines');

//Template literals can assemble multiple pieces into one final string
//``->Backticks to tell javascript that this is template string
const jonasNew=`I'm ${name3}, a ${year1-birthYear1} years old ${job3} !`;
console.log(jonasNew);

console.log(`Just a regular String...`);

console.log(`String 
multiple
lines`);

//----8----
//if-else statements
const age1=15;
if (age1>=18) {
    console.log(`Sarah can Start driving license`);
} else {
    const yearLeft=18-age1;
    console.log(`Sarah is too young. wait another ${yearLeft} years`);
}

const birthYear2=2012;
let century;
if (birthYear2<=2000) {
    century=20;
} else {
    century=21;
}
console.log(century);

//----9----
//Type Conversion and Coercion
//type conversion
const inputYear='1991';
console.log(inputYear+18);//199118
console.log(Number(inputYear)+18);//2009
console.log(Number(inputYear),inputYear);//1991,"1991"

console.log(Number('Jonas'));//NaN
console.log(typeof NaN);

console.log(String(23),23);

//type coercion(JavaScript converts one value into another value to execute)
console.log('I am '+23+' years old');
console.log('23'-'10'-3);//10
console.log('23'+'10'+3);//23103 Only In Plus(+) operator all the number are converted into strings
console.log('23'/'2');
console.log('23'*'2');
console.log('23'>'18');

let n='1'+1;//'11'
n=n-1;
console.log(n);//10

//----10----
//Truthy and Falsy Values
//Falsy Values: Values that will be converted into false when we attempt to convert them into a boolean. 
//In Js, only 5 falsy values: 0,'',undefined,null,NaN

//Truthy Values: Vice-versa of falsy values definition
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money=0;
//here JS converted this number into boolean, i.e; false
if (money) {
    console.log("Don't Spend it all");
} else {
    console.log("You Should get a job!");//due to falsy value condition elxe statement is executed.
}

let height=1;
//Here height is defined , i.e; true
if (height) {
    console.log('YAY! Height is defiened');
} else {
    console.log('Height is undefined');
}

//----11----
//Equality Operators == vs ===
//===(Strict Equality Operator), does not perform type coersion
const age2=18;
if (age2===18)//this operator in condition return boolean value
console.log(` You just become an adult! :D(Strict)`);
//==(Loose Equality Operator)(avoid in genral use)
if (age2==18)
console.log(` You just become an adult! :D(Losse)`);

//prompt function will open prompt box and take input 
const favourite=Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){//22===23->false
    console.log('Cool! 23 is an amazing number');
}else if(favourite===7){
    console.log('7 is also a cool number');
}else if(favourite===9){
    console.log('9 is also a cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}

//Different(Not Equal) operator
if(favourite !==23)
console.log('Why not 23');

//----12----
//Logical Operators
const hasDriverLicense=true; //A
const hasGoodVision=true; //B
//AND operator
console.log(hasDriverLicense && hasGoodVision);
//OR operator
console.log(hasDriverLicense || hasGoodVision);
//NOT operator
console.log(!hasDriverLicense);

if(hasDriverLicense && hasGoodVision){
    console.log(`Sarah is able to  drive!`);
}else{
    console.log(`Someone else should drive...`);
}

const isTired=false; //condition
console.log(hasDriverLicense && hasGoodVision && isTired);//false

if(hasDriverLicense && hasGoodVision && isTired){
    console.log(`Sarah is able to drive!`);
}else{
    console.log(`Someone else should drive...`);
}

//----13----
//The Switch Statement
const day='wednesday';

switch(day){
    case 'monday':
        console.log(`Plan Course Structure`);
        console.log(`Go to Coding Meet up`);
        break;
    case 'tuesday':
        console.log(`prepare theory videos`);
        break;
    case 'wednesday':
    case 'thrusday':
        console.log(`write code examples`);
        break;
    case 'friday':
        console.log(`record videos`);
        break;
    case 'saturday':    
    case 'sunday':
        console.log(`Enjoy weekend`);
        break;
    default:
        console.log(`not a valid day`);                        
}

if(day==='monday'){
    console.log(`plan course structure`);
    console.log(`Go to coding meet up`);
}else if(day==='tuesday'){
    console.log(`prepare theory videos`);
}else if(day==='wednesday' || day==='thrusday'){
    console.log(`write code examples`);
}else if(day==='friday'){
    console.log(`record videos`);
}else if(day==='saturday' || day==='sunday'){
    console.log(`Enjoy Weekend`);
}else{
    console.log(`not a valid day`);
}

//----14----
//Statements and Expressions
//Expressions
3+4
1991
true && false && !false
//Statements
if (23>10) {
    console.log(`23 is bigger`);
}

const me='Jonas';
console.log(`I'm ${2037-1991} years old ${me}`);

//----15----
//The Conditional(Ternary) Operator
const age3=23;
age3>=18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink=age3>=18 ?'wine':'water';
console.log(drink);//wine

let drink1;
if (age3>=18) {
    drink1='wine';
}else{
    drink1='water';
}
console.log(drink1);

console.log(`I like to drink ${age3>=18?'wine':'water'}`);