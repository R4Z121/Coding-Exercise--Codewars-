// Kata source : https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
  const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return nbPetals <= 6 ? phrases[nbPetals-1] : phrases[(nbPetals - 1) % 6];
}