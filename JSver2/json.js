// JSON (JavaScript Object No)
// 자바스크립트의 객체 표기법
import myData from './myData.json'

console.log(myData)

const user = {
  'name': 'miiin_sseong',
  age: 26,
  emails: [
    'wsc03002@naver.com',
    'https://github.com/alstjd0051'
  ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)