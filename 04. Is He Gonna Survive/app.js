// Kata source : https://www.codewars.com/kata/59ca8246d751df55cc00014c

const hero = (bullets, dragons) => (dragons*2) <= bullets;

//TEST
console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));