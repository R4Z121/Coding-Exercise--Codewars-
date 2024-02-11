//Kata source : https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => Array(n).fill(0).map((el,idx) => idx+1).reverse();

//TEST
console.log(reverseSeq(5));