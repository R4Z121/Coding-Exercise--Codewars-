// Kata Source : https://www.codewars.com/kata/57f780909f7e8e3183000078

const grow = x => x.reduce((total,num) => total*num);

//TEST
console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4])); 
console.log(grow([2, 2, 2, 2, 2, 2]));