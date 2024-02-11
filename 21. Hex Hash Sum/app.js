// Kata source : https://www.codewars.com/kata/5ab363ff6a176b29880000dd

function hexHash(code){
  const chars = code.split('').map(el => el.charCodeAt(0).toString(16).replace(/\D+/g, '')).join('').split('').map(el => Number(el));
  if(chars.length) {
    return chars.reduce((a,b) => a+b);
  }
  return 0;
}