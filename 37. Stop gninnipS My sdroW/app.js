// Kata source : https://www.codewars.com/kata/5264d2b162488dc400000001

const spinWords = string => string.split(' ').map(el => el.length >=5 ? el.split('').reverse().join(''): el).join(' ');
