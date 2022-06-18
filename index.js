function hasTargetSum(array1,target){
   
  for(let i=0;i<array1.length;i++){
    for(let j=i+1;j<array1.length;j++){
      if(array1[i]+array1[j]==target){
        return true
      }
      
    }
  
  }
    return false
}

console.log(hasTargetSum([1,2,3,4,5,6],12))
/* 
  Write the Big O time complexity of your function here
  time complexity (n)*(n)*
  O(n**2)
*/

/* 
  Add your pseudocode here
*/
//solve using brute force approach of creating two nested loops
//1*iterate over the first array using for..let assigning values to i
//2*make a nested loop inside the first array assigning the values to j
//3*create an if..statement to check if the sum of i and j is equal to the target integer
//4*return true if equal else return false
/*
  Add written explanation of your solution here
*/
//solve using brute force approach of creating two nested loops
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
