// Kata source : https://www.codewars.com/kata/57d5e850bfcdc545870000b7

const deadAntCount = (ants) => {
  // Your code here
  if(ants) {
    const deadAnts = ants.split('ant').join('').split('');
    const a = deadAnts.filter(el => el == 'a').length;
    const n = deadAnts.filter(el => el == 'n').length;
    const t = deadAnts.filter(el => el == 't').length;
    return Math.max(a,n,t);
  }
  return 0;
}