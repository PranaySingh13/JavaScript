//----1----
//Activating Strict Mode(for more secure and errorfree and accidental bugsfree script code)
//It should be the first expression in script file.
'use strict';

let hasDriverLicense=false;
const passTest=true;

if(passTest) 
hasDriverLicense=true;
if(hasDriverLicense) 
console.log(`I can drive :D`);

//Unexpected strict mode reserved word
//const interface='Audio';
//const private=534;

//----2----
//Functions :- It can hold one or chunk of lines of code
//In JS, functions is nothing but a value can be no.,string, etc.
function logger(){
    console.log('My Name is Jonas');
}
//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apple,oranges) {
    const juice=`Juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);
const num=Number('23');

//----3----
//Function Declarations Vs Expressions
//Function Declaration(works both in top-down and down-top approach)
function calcAge1(brithYear){
    return 2037-brithYear;
}
const age1=calcAge1(1991);
console.log(age1);

//Preffered
//Function Expression(Anonymous Function)(works in top-down approach only)
const calcAge2=function (birthYear) {
    return 2037-birthYear;
}
const age2=calcAge2(1991);
console.log(age1,age2);

//Function Declaration and Expressions works in a same way.

//----4----
//Arrow Functions
//1.single arguments functions
//here calcAge3() is function name
const calcAge3=birthYear1=>2037-birthYear1;
const age3=calcAge3(1991);
console.log(age3);

//2.multiple arguments arguments
//here yearsUntilRetirement() is function name
const yearsUntilRetirement=(birthYear2,firstName)=>{
    const age4=2037-birthYear2;
    const retirement=65-age4;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bob'));

//----5----
//Functions Calling Other Functions 
function cutFruitPieces(fruit) {
   return fruit*4; 
}

function fruitProcessor(apples,oranges) {
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,4));

//----6----
//Reviewing Functions
const calcAge4=function (birthYear3) {
    return 2037-birthYear3;
}

const yearsUntilRetirement1=function(birthYear3,firstName1){
    const age5=calcAge4(birthYear3);
    const retirement1=65-age5;

    if (retirement1>0) {
        console.log(`${firstName1} retires in ${retirement1} years`);
        return retirement1;
    } else {
        console.log(`${firstName1} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement1(1991,'Jonas'));
console.log(yearsUntilRetirement1(1950,'Mike'));

//----7----
//Introduction To Arrays
const friend1='Micheal';
const friend2='Steven';
const friend3='Peter';

//creating an array
const friends=['Michael','Steven','Peter'];
console.log(friends);

const years =new Array(1991,1984,2008,2020);
console.log(years);
console.log(friends[0],years[1]);
console.log(friends.length);//exact amount of elements in array
console.log(friends[friends.length-1]);//peter
friends[2]='Jay';
console.log(friends);

const firstName='Jonas';
const jonas=[firstName,'Schmedtmann',2037-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge5=function(birthYear5){
    return 2037-birthYear5;
}
const years1=[1990,1967,2002,2010,2018];
const age6=calcAge5(years1[0]);//47
const age7=calcAge5(years1[1]);//70
const age8=calcAge5(years1[years1.length-1]);//19
console.log(age6,age7,age8);

const ages=[calcAge5(years1[0]),calcAge5(years1[1]),calcAge5(years1[years1.length-1])];
console.log(ages);