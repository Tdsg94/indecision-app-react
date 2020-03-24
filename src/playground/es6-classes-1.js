class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `Hi. I'm ${ this.name } and I'm ${ this.age }!`
  }
  getDescription(){
    return `${ this.name } is ${ this.age } year(s) old!`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += `I've a major in ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let locationMessage = super.getGreeting();
    if(this.hasLocation()){
      return locationMessage += ` I'm visiting from ${this.homeLocation}`;
    }
    return locationMessage;
  }
}


const me = new Traveler('David', 25, 'Lisbon');
console.log(me);
console.log(me.hasLocation());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);
console.log(other.hasLocation());
console.log(other.getGreeting());
