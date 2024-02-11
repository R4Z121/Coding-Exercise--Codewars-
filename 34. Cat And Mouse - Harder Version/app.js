// Kata source : https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf

const catMouse = (x, j) => {
  
  if(!x.includes('C') || !x.includes('D') || !x.includes('m') ) {
    return 'boring without all three';
  }
  
  const catPosition = x.indexOf('C');
  const dogPosition = x.indexOf('D');
  const mousePosition = x.indexOf('m');
  
  return (Math.abs(catPosition - mousePosition) <= j+1) ? ((dogPosition > catPosition && dogPosition < mousePosition) || (dogPosition < catPosition && dogPosition > mousePosition) ? 'Protected!' : 'Caught!') : 'Escaped!'
}