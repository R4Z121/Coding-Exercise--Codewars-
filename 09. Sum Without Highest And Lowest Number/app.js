//Kata source : https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if(array != null && array.length > 2) {
     return array.sort((a,b) => a-b).map((el,idx) => {
       if(idx == 0 || idx == array.length-1) {
         return 0;
       } else {
         return el;
       }
     }).reduce((a,b) => a+b);
  }
  return 0;
}