/*
Our soccer team plays a tournament in which it played 10 matches.
Match results are noted "3:0": first number is **our** team's goals count ; the second is the other team's.
To know our team's score, we follow these rules:
- Victory: 3pts
- Draw: 1pt
- Defeat: 0pt
Given an array with our match's results, write a function which will return our score.
To test your function, if you "feed" your function the array under this text, you should get 13 points.
*/

const scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3'];


function getPoints(array) {
  // Your code here !
  let points = 0;
  array.forEach(score => {
    const ourScore = score.match(/(\d+):(\d+)/)[1];
    const otherScore = score.match(/(\d+):(\d+)/)[2];
    if (ourScore > otherScore) {
      points += 3;
    } else if (ourScore === otherScore) {
      points += 1;
    }
  })
  return points;
}

module.exports = getPoints;
