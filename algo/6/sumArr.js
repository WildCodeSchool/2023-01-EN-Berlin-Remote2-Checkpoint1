/*
Write a function with two parameters. These parameters are arrays, holding numbers **stored as strings**.
Your function should return **one** array, where every element is the sum of the two matching arguments's elements (ie: the first element in the resulting array equals the first element of the first argument plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
  // Your code here !
  let array1 = ["1", "2", "3", "4"];
  let array2 = ["5", "6", "7", "8"];
  for (var i = 0; i < array1.length; i++) {
    sum.push(array1[i] + array2[i]);
  }
}

module.exports = sumArr;
