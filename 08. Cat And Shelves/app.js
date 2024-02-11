//Kata source : https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish) 
{
  //Mew
  let jumpCount = 0;
  
  while(start < finish) {
    if((start + 3) <= finish ) {
      start += 3;
    } else {
      start += 1;  
    }
    jumpCount++;
  }
  
  return jumpCount;
}

//TEST
console.log(solution(1, 5));
console.log(solution(3, 3));
console.log(solution(2, 4));