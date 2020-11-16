//1. Coding Challenge

const markWeight=78;
const markHeight=1.69;
const johnWeight=92;
const johnHeight=1.95;

const bmiMark=markWeight/markHeight**2;
const bmiJohn=johnWeight/johnHeight**2;
console.log(bmiMark,bmiJohn);

const markHigherBMI=bmiMark>bmiJohn;
console.log(markHigherBMI);

