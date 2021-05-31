import random from './getRandom';
import abc from './getRandom'



// console.log(abc())


// const a = random()
const ulEl = document.querySelector('ul')
// console.log(ulEl)





/*
for statement
for(시작조건; 종료조건; 변화조건) {}
*/
for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {

    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}





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