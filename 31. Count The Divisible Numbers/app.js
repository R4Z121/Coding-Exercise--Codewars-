// Kata source : https://www.codewars.com/kata/55a5c82cd8e9baa49000004c

const divisibleCount = (x, y, k) => {
  let first = 0;
  let last = (y % k == 0) ? y : (Math.floor(y/k))*k;
  
  let loop = true;
  while(loop) {
    if(x%k==0){
      first = x;
      loop=false;
    }
    x++;
  }
  
  return (last-first+k)/k
}