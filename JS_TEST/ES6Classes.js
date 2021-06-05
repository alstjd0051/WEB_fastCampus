//ES6 Classes


/* function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
} */

//class문법
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const miiinsseong = new User('miiiinseong', 'song')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(miiinsseong)
console.log(amy.getFullName())
console.log(neo.getFullName())