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

//2. Coding Challenge
if (markHigherBMI) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
} else {
    console.log(`John's BMi(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
}

//3. Coding Challenge
const avgDolphins=(97+112+101)/3;
const avgKoalas=(109+95+110)/3;
console.log(avgDolphins,avgKoalas);

if(avgDolphins>avgKoalas && avgDolphins>=100){
    console.log(`Dolphins team won with highest average score of ${avgDolphins}`);
}else if(avgKoalas>avgDolphins && avgKoalas>=100){
    console.log(`Koalas team won with highest averrage score of ${avgKoalas}`);
}else if(avgDolphins===avgKoalas && avgDolphins>=100 && avgKoalas>=100){
    console.log(`Same average score of both teams`);
}else{
    console.log(`No one wins`);
}

//4. Coding Challenge
const billValue=275;
const tip=billValue>=50 && billValue<=300?billValue*0.15:billValue*0.2;
console.log(`The Bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);
