/*
A theater employee would like to get a list of all the seats in his main room.
In the hall the seats are distributed as follows:
  - There are 26 columns of seats, numbered "1" to "26".
  - Each column contains 100 seats, numbered from "1" to "100".

Complete the function theaterSieges so that it returns a matrix
where each subarray lists the positions of the seats in a row.

example of the final output:

[
  ['1-1', '1-2', '1-3', ..., '1-100'],
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ...
  ['26-1', '26-2', '26-3', ..., '26-100']
]
*/

function theaterSieges() {
  // Your code here !
  let matrix = [];

  for (let row = 0; row < 26; row++) {
    matrix.push([]);

    for (let column = 1; column < 100 + 1; column++) {
      matrix[row].push(`${row + 1}-${column}`);
    }
  }

  return matrix;
}

console.log(theaterSieges());

module.exports = theaterSieges;
