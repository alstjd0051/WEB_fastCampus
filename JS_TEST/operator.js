// 산술연산자(arithmetic operator)
/**
 console.log(1+2)
 console.log(5-7)
 console.log(3 * 4)
 console.log(10/2)
 console.log(7 % 5)
 */

// ----------------------------------------------

//할당 연산자(assignment operator)
// let a = 2
// //  const a = 2
// // a += 1
// a *= 1

// console.log(a)

// ----------------------------------------------

// 비교 연산자(comparison operator)
// const a = 1
// const b = 3

// console.log(a === b) //false

// function isEqul(x, y) {
//   return x === y
// }
// console.log(isEqul(1, 1)) // true
// console.log(isEqul(2, '2')) //숫자와 문자여서 false

// const c = 1
// const d = 7

// console.log(c < b)

// ----------------------------------------------

//논리 연산자(logical operator)
// const e = 1 === 123
// const f = 'AB' === 'ABc'
// const g = false
// console.log(e)
// console.log(f)
// console.log(g)

// console.log('&&: ', e && f && g) //AND
// console.log('||: ', e || f || g) //OR
// console.log('!: ', !e) //NOT



// ----------------------------------------------
//삼항 연산자(teranry operator)
const a = 1 < 2
if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')