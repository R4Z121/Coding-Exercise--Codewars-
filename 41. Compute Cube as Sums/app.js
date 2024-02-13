// Kata source : https://www.codewars.com/kata/58af1bb7ac7e31b192000020

const findSummands = n => {
  let result = [];
  const target = n**3;

  for(let i = n%2 == 1 ? n : n+1; i <= target; i+=2) {
    const sum = (i*n) + (n**2) - n
    if(sum == target) {
      result = Array(n).fill(0).map((el,idx) => i + (2*(idx+1)) - 2);
      break;
    } else if(sum > target) {
      break;
    }
  }
  return result;
}