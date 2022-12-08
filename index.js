
function isPalindrome(word) {
  // Write your algorithm here
  //turning string to an array 
  let stringArray = []
  for(letters of word){
    stringArray.push(letters)
  }
  let stringArray2 = [...stringArray]
  //iterating from left to right
  let leftIteration = []
  for(let i = 0;i < stringArray.length;){
    leftIteration.push(stringArray.splice(0,1))
  }
  //iterating from right to left
  let rightIteration = []
  for(let i = 0;i < stringArray2.length;){
    rightIteration.push(stringArray2.splice(-1,1))
  }
  //comparing the results
  let result = rightIteration.toString() == leftIteration.toString()
  return result
}
/* 
  Add your pseudocode here
*/
/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// Write a function that returns true if a word is a 
// palindrome  and false if it is not

//create a function that takes in a string to assess
//convert the string into an array
//iterate through the string from left to right
// iterate through the string from right to left
// compare the results and return true if they are 
// the same and false otherwise

// function isPalindrome(word){
//   //turning string to an array 
//    let stringArray = []
//   for(letters of word){
//     stringArray.push(letters)
//   }
//   let stringArray2 = [...stringArray]
//   //iterating from left to right
//   let leftIteration = []
//   for(let i = 0;i < stringArray.length;){
//     leftIteration.push(stringArray.splice(0,1))
//   }
//   //iterating from right to left
//   let rightIteration = []
//   for(let i = 0;i < stringArray2.length;){
//     rightIteration.push(stringArray2.splice(-1,1))
//   }
//   //comparing the results
//   let result = rightIteration.toString() == leftIteration.toString()
//   return result
//   }