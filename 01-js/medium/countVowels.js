/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let res = str.toLowerCase().split("");
  let count = 0;
  for(let i = 0; i < res.length; i++) {
    if(res[i] === 'a' || res[i] === 'e' || res[i] === 'i'  || res[i] === 'o' || res[i] === 'u'){
      count++;
    }
  }

  return count;
    // Your code here
}

module.exports = countVowels;