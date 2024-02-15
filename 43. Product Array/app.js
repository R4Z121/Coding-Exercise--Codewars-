// Kata source : https://www.codewars.com/kata/5a905c2157c562994900009d

const productArray = numbers => {
  const result = [];
  numbers.forEach((el,idx) => {
    const product = [...numbers.slice(0,idx), ...numbers.slice(idx+1,numbers.length)];
    result.push(product.reduce((a,b) => a*b));
  });

  return result;
}

console.log(productArray([3,27,4,2]))