// Kata source : https://www.codewars.com/kata/5a63948acadebff56f000018

const maxProduct = (numbers, size) => numbers.sort((a,b) => b-a).slice(0,size).reduce((c,d) => c * d);