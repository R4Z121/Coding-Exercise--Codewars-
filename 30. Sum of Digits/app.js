// Kata source : https://www.codewars.com/kata/541c8630095125aba6000c00

const digitalRoot = n => {
  let result = n;
  while(result >= 10) {
    result = Number(result.toString().split('').reduce((a,b) => Number(a) + Number(b)))
  }
  return result;
}