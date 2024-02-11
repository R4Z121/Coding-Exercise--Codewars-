// Kata source : https://www.codewars.com/kata/659af96994b858db10e1675f

const beginning = xs => {
  let startNumber = xs.slice(0,1);
  let digits = 1;
  let currentString = xs.replace(xs.charAt(0),'');
  let numIndex = [];
  
  while(currentString.length) {
    if(currentString.startsWith(Number(startNumber)+1)) {
      currentString = currentString.replace((Number(startNumber) + 1),'');
      numIndex.push(Number(startNumber));
      startNumber = Number(startNumber) + 1;
    }else{
      digits++;
      startNumber = xs.slice(0,digits);
      currentString = xs.replace(startNumber,'');
      numIndex = [];
    }
  }
  
  return numIndex.length ? numIndex.sort((a,b) => a-b)[0] : Number(xs);
}