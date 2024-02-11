// Kata source : https://www.codewars.com/kata/5513795bd3fafb56c200049e

const countBy = (x, n) => Array(n).fill(0).map((el,idx) => x * (idx+1));

//TEST
console.log(countBy(1,10));
console.log(countBy(2,5));