//1. Coding Challenge
'use strict';
const calcAverage=(a,b,c)=>(a+b+c)/3;
const avgScoreDolphins=calcAverage(85,54,41);
const avgScoreKoalas=calcAverage(23,34,27);
const checkWinner=(avgDolphins,avgKoalas)=>{

    if(avgDolphins>=2*avgKoalas){
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }else if(avgKoalas>=2*avgDolphins){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }else{
        return `No team Wins!`;
    }
}
console.log(checkWinner(avgScoreDolphins,avgScoreKoalas)); 