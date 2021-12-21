function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const number of array) {
    if (seenNumbers.has(target - number)){
      return true
    }
    seenNumbers.add(number)
  }
  return false
}

/* 
  o(n)
*/

/* 
  create new set to hold seen #'s

  for of loop iterating over array
    if seen #'s set contains value = target - number
      return true
  add value of number to seen # set (outside of if statement)
  
  return false outside of for loop
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
