// Kata source : https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (a, b) => {
  b.forEach(el => {
    a = a.filter(num => num != el);
  });

  return a;
}