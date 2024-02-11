// Kata source : https://www.codewars.com/kata/58925dcb71f43f30cd00005f

const latestClock = (...arr) => {
  let temp = [0,0,0,0];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(j != i) {
        for(let k = 0; k < arr.length; k++) {
          if(k != i && k != j) {
            for(let l = 0; l < arr.length; l++) {
              if(l != k && l != j && l != i) {
                if(Number([arr[i],arr[j]].join('')) <= 23 && Number([arr[k],arr[l]].join('')) <= 59) {
                  temp = Number([arr[i],arr[j],arr[k],arr[l]].join('')) > Number(temp.join('')) ? [arr[i],arr[j],arr[k],arr[l]] : temp;
                }
              }
            }
          }
        }
      }
    }
  }

  temp.splice(2,0,":");
  return temp.join('');
}