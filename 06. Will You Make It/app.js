// Kata source : https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => (mpg*fuelLeft) >= distanceToPump;

//TEST
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
console.log(zeroFuel(60, 30, 3));
console.log(zeroFuel(70, 25, 1));
console.log(zeroFuel(100, 25, 3));