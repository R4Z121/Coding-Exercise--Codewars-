// Kata source : https://www.codewars.com/kata/54da539698b8a2ad76000228

const isValidWalk = walk => {
  if(walk.length < 10) {
    return false;
  }
  
  const position = { x: 0, y: 0 }
  let timePassed = 0;
  
  walk.forEach(el => {
    if(timePassed <= 10) {
      el == 'n' ? position.y++ : (el == 's' ? position.y-- : (el == 'e' ? position.x++ : position.x--));
      timePassed++;
    }else{
      return;
    }
  })
  
  return (position.x == 0 && position.y == 0) ? true : false;
}