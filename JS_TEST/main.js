/*
const minseong = {
  firstName: 'miiin_sseong',
  lastName: 'song',
  getfullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(minseong)


const actor = {
  firstName: 'Leonardo',
  lastName: 'Dicaprop',
  getfullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(actor.getfullName())
*/

/*
클래스
function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
const minseong = new user('minseong', 'song')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(minseong.getFullName())
console.log(minseong.getFullName())
console.log(amy.getFullName())
console.log(neo)
 */

//화살표 함수
// () => {} vs function () {}

/* const double = function (x, y) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = (x) => ({
  name : 'Miiin_sseong'
})
console.log('doubleArrow', doubleArrow(7)) */

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
const a = 7

function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})()