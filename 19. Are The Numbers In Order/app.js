// Kata source : https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr) {
  // Code your algorithm here :)
  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}