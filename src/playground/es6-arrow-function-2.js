//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); -- only works in es5 functions
  return a + b;
}
console.log(add(55,1, 1001));

const user = {
  name: 'Tiago',
  cities: ['lisbon', 'porto', 'faro'],
  printPlacesLived () {
    return  this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 4,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());