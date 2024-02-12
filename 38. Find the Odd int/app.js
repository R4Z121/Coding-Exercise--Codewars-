// Kata source : https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = arr => {
  const numbersGroup = {};
  let oddInt = 0;
  
  arr.forEach(el => {
    numbersGroup[el] = (numbersGroup[el] || 0) + 1;
  });

  Object.keys(numbersGroup).forEach(key => {
    if(numbersGroup[key] % 2 == 1) {
      oddInt = key;
      return;
    }
  })

  return Number(oddInt);
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([7]));