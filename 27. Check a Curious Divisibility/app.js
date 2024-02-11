// Kata source : https://www.codewars.com/kata/5681e4ff81ba1b0cdb000031

const findInt = (a, b, n) => {
  const result = [];
    for(let i = a; i <= b; i++) {
      const digits = i.toString().split("");
      const score_prod = digits.map((digit,idx) => digit*(idx+1)).reduce((a,b) => a+b);
      const score_pow = digits.map((digit,idx) => Math.pow((idx+1),digit)).reduce((a,b) => a+b);
      const divisorsOfScoreProd = [];
      for(let j = 1; j <= score_prod; j++) {
        if(score_prod%j == 0) {
          divisorsOfScoreProd.push(j,score_prod/j)
        }
      }
      const sumOfDivisorsOfScoreProd = [...new Set(divisorsOfScoreProd)].reduce((a,b) => a+b);
      if((score_pow * n)%sumOfDivisorsOfScoreProd == 0) {
        result.push(i); 
      }
    }
  
  return [result.length,result];
}