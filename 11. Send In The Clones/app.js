// Kata source : https://www.codewars.com/kata/58ddffda929dfc2cae0000a5

var clonewars = function(kataPerDay) {
  // Your code here!
  let clones = 1;
  let kataSolvingAbility = kataPerDay;
  let numberOfKataSolved = 0;
  
  while(kataSolvingAbility > 0) {
    numberOfKataSolved += (clones * kataSolvingAbility);
    kataSolvingAbility--;
    if(kataSolvingAbility > 0) {
      clones *= 2;
    }
  }
  
  return [clones,numberOfKataSolved];
}