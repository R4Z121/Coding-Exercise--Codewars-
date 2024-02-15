// Kata source : https://www.codewars.com/kata/514b92a657cdc65150000006

const solution = number => {
  if(number <= 0) return 0;

  const n3 = Math.floor((number-1)/3) + 1;
  const n5 = Math.floor((number-1)/5) + 1;
  const n15 = Math.floor((number-1)/15) + 1;

  const sumOfMultipleOf3 = (3 * (n3**2 - n3)) / 2;
  const sumOfMultipleOf5 = (5 * (n5**2 - n5)) / 2;
  const sumOfMultipleOf15 = (15 * (n15**2 - n15)) / 2;

  return sumOfMultipleOf3 + sumOfMultipleOf5 - sumOfMultipleOf15;
}
