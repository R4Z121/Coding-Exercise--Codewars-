// Kata Source : https://www.codewars.com/kata/556cebcf7c58da564a000045

function numberOfRectangles(m, n) {
  let result = 0;
  for(let i = m; i >= 1; i--) {
    for(let j = n; j >= 1; j--) {
      result += (i*j);
    }
  }
  return result;
}