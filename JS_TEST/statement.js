import random from './getRandom';
import abc from './getRandom'



// console.log(abc())


// const a = random()
// const ulEl = document.querySelector('ul')
// console.log(ulEl)





/*
for statement
for(시작조건; 종료조건; 변화조건) {}
*/
// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if ((i + 1) % 2 === 0) {

//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }





// // switch statement

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break;
//   case 2:
//     console.log('a is 2')
//   case 4:
//     console.log('a is 4')
//   default:
//     console.log('zero')
// }

// if statement

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }



// 함수 복습
function sum(x, y) {
  // console.log(x + y)
  return x + y

}
// const a = sum(1, 3)
// const b = sum(4, 12)
// console.log(a)
// console.log(sum(1, 3))
// console.log(b)
// console.log(sum(4, 12))
// console.log(a + b)

sum(1, 3)


function zem(x, y) {
  console.log(arguments)
  return arguments[0] + arguments[1]
}
console.log(zem(7, 3))