/* const userAge = {
    //key: value
    name: 'miiin_sseong',
    age: 26
}
const userEmail = {
    name: 'miiin_sseong',
    email: 'wsc03002@naver.com'
}
const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) */

const user = {
    name: 'miin_sseong',
    age: 26,
    email: 'wsc03002@naver.com'
}
const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)