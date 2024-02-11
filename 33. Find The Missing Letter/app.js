// Kata source : https://www.codewars.com/kata/5839edaa6754d6fec10000a2

const findMissingLetter = array => {
  let missingLetter = '';
  array.forEach((letter,idx) => {
    if(array[idx+1]){
      if(letter.charCodeAt(0) - array[idx+1].charCodeAt(0) == -2) {
        missingLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
        return;
      }
    }
  })
  return missingLetter;
}