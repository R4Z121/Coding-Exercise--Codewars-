// Kata source : https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n)
{
  // Calculate the factorial here
  if(n <= 12) {
    if(n == 0) {
      return 1;
    }
    return Array(n).fill().map((num,idx) => idx+1).reduce((a,b) => a*b);
  } else {
    throw new RangeError("false range");
  }
}