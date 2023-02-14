/*
Here is an array of people. Write a function which will return a new array, itself containing two arrays:
- The first one contains only adult females
- The second one contains only adult males
(Given a person is an adult if she/he is 18 or older)
*/

const persons = [
  { name: "Mary Poppins", age: 32, sex: "female" },
  { name: "Tony Stark", age: 36, sex: "male" },
  { name: "John Doe", age: 12, sex: "male" },
  { name: "Jane Doe", age: 6, sex: "female" },
  { name: "Maggie Simpson", age: 2, sex: "female" },
  { name: "Leonardo", age: 92, sex: "male" },
  { name: "Carla Moreau", age: 24, sex: "female" },
  { name: "Mickael Jackson", age: 17, sex: "male" },
  { name: "Penelope Milena", age: 27, sex: "female" },
  { name: "Homer Simpson", age: 45, sex: "male" },
  { name: "Leonardo Di Caprio", age: 42, sex: "male" },
  { name: "Carla Bruni", age: 54, sex: "female" },
  { name: "Lisa Simpson", age: 13, sex: "female" },
  { name: "Millie Bobby Brown", age: 15, sex: "female" },
  { name: "Penelope Cruz", age: 47, sex: "female" },
];

function findAdults(arr) {
  const adults = arr.filter((person) => person.age >= 18);
  const females = adults.filter((female) => female.sex === "female");
  const males = adults.filter((male) => male.sex === "male");
  return [females, males];
}
module.exports = findAdults;

// function findAdults(arr) {
//   const females = persons.filter(
//     (person) => person.age >= 18 && person.sex === "female"
//   );
//   const males = persons.filter(
//     (person) => person.age >= 18 && person.sex === "male"
//   );
//   return [females, males];
// }

// module.exports = findAdults;

// function findAdults(arr) {
//   // Your code here !
//   const adultFemales = arr.filter(
//     (female) => female.sex === "female" && female.age > 18
//   );
//   const adultMales = arr.filter((male) => male.sex === "male" && male.age > 18);

//   return [adultFemales, adultMales];
// }

// module.exports = findAdults;

// function findAdults(arr) {
//   // Your code here !
//   let adultFemales = arr.filter(function (person) {
//     return person.age > 18 && person.sex === "female";
//   });
//   let adultMales = arr.filter(function (person) {
//     return person.age > 18 && person.sex === "male";
//   });
//   return [adultFemales, adultMales];
// }

// // findAdults(persons);

// module.exports = findAdults;
