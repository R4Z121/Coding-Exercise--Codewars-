// Kata source : https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4

function makeValley(arr) {
  const leftWing = [];
  const rightWing = [];
  const sortedArr = arr.sort((a,b) => b-a);
  
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
      leftWing.push(sortedArr[i]);
    } else {
      rightWing.push(sortedArr[i]);
    }
  }
  return [...leftWing, ...rightWing.reverse()]
}

//TEST
console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
console.log(makeValley([20, 7, 6, 2]));
console.log(makeValley([14, 10, 8]));
console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]));
console.log(makeValley([20, 16, 14, 10, 1]));
console.log(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4]));
console.log(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1]));
console.log(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2]));
console.log(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4]));
console.log(makeValley([19, 8, 6]));