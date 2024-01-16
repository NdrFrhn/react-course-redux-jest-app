// const person = {
//   name: 'Nader',
//   age: 35,
//   location: {
//     city: 'Milano',
//     temp: 100 
//   }
// }

// const {name : firstName = 'Anonymous' , age, location} = person;

// const {city, temp} = person.location;

// console.log(`${firstName} is ${age}.`)

// if(person.location.city && person.location.temp) {
//   console.log(`It's ${temp} degrees in ${city}.`)
// }

// const book = {
//   title: "L'insostenibile leggerezza dell'essere",
//   author: 'Milan Kundera', 
//   publisher: {
//     // name: 'Feltrinelli '
//   }
// }

// const {name : publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName); // Feltrinelli, Self-published 

const item = ['coffee', '2£', '3£', '4£']

const [beverage, , thirdItem ] = item;

// Grab first and third item array destructuring
console.log(`A medium ${beverage} costs ${thirdItem}`)


export {item as default};