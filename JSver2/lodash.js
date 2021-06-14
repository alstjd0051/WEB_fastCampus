// https://lodash.com/
// uniq = 중복된 숫자 제거
import _ from 'lodash'

// const usersA = [
//   { userId: '1', name: 'miiin_sseong' },
//   { userId: '2', name: 'maria' }
// ]
// const usersB = [
//   { userId: '1', name: 'miiin_sseong' },
//   { userId: '3', name: 'hwasa' }
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))


// const userD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', userD)

const users = [
  { userId: '1', name: 'miiin_sseong' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Maria' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Maria' })
const foundUserIndex = _.findIndex(users, { name: 'Maria' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'miiin_sseong' })
console.log(users)