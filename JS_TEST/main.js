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
/* const a = 7

function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}()); */

//호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

/* const a =7

const double = function () {
  console.log(a*2)
}
double() */

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
//  clearTimeOut() : 설정된 Timeout 함수를 종료
//  clearInterval() : 설정된 Interval 함수를 종료

/* setTimeout( () => {
  console.log('miiin_sseong')
}, 3000) */

/* const timer = setTimeout(() => {
  console.log('miiin_sseong')
}, 3000) */

const timer = setInterval(() => {
  console.log('miiin_sseong')
}, 3000)

/* const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
}) */
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})