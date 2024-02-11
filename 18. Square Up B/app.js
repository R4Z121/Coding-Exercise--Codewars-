// Kata source : https://www.codewars.com/kata/5a8bcd980025e99381000099

function squareUp(n)
{
  const result = [];
  for(let i = 1; i <= n; i++) {
    for(let j = n; j >= 1; j--) {
      if(j > i) {
        result.push(0)
      } else {
        result.push(j);
      }
    }
  }
  return result // Do your magic!
}