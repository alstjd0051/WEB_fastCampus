// 생성자함수
/* const miiin_sseong = {
  firstName: 'song',
  lastName: 'miiin_sseoyg',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
} //Member
console.log(miiin_sseong.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName()) */

function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const miiin_sseong = new user('miiinseong', 'Song')
const amy = new user('Amy' , 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(miiin_sseong.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())