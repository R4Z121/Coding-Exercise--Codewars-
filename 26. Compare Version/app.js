// Kata Source : https://www.codewars.com/kata/53b138b3b987275b46000115

function compareVersions (version1, version2) {
  if(version1 == version2) {
    return true;
  }
  const arrVersion1 = version1.split('.');
  const arrVersion2 = version2.split('.');
  const maxLength = Math.max(arrVersion1.length, arrVersion2.length);
  
  for(let i = 0; i < maxLength; i++) {
    const num1 = arrVersion1[i] ? Number(arrVersion1[i]) : 0;
    const num2 = arrVersion2[i] ? Number(arrVersion2[i]) : 0;
    if(num1 > num2) {
      return true;
    }else if(num1 < num2) {
      return false;
    }
  }
  
  return false;
}