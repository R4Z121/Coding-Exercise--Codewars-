// Kata source : https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
  return str.replaceAll('-','_').split('_').map((word,idx) => idx == 0 ? word : word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join('');
}