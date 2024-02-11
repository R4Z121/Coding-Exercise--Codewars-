// Kata source : https://www.codewars.com/kata/5966eeb31b229e44eb00007a

function vaporcode(string) {
  const stringArr = string.split(' ').join('').split('');
  return stringArr.map(el => el.toUpperCase()).join('  ');
}