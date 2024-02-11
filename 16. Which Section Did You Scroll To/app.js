// Kata source : https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
const getSectionIdFromScroll = (scrollY,sizes) => {
  let sectionIdx = 0;
  let nSize = sizes[sectionIdx];
   for(let i = 1; i <= sizes.length; i++) {
    if(scrollY <= nSize-1) {
      return sectionIdx;
    } else {
      if(i == sizes.length) {
        return -1;
      }
      nSize += sizes[i];
      sectionIdx++;
    }
   }
}