// Kata source : https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const likes = names =>  {
  let showNames = '';
  if(names.length) {
    if(names.length >= 4) {
      showNames = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    } else if(names.length == 3) {
      showNames = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if(names.length == 2) {
      showNames = `${names[0]} and ${names[1]} like this`;
    } else {
      showNames = `${names[0]} likes this`;
    }
  }
  return showNames.length ? showNames : 'no one likes this';
}