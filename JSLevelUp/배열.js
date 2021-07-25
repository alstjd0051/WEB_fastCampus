const number = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
//length
console.log(number.length)
console.log(fruits.length)

// concat() 두개의 배열 병합 새로운 배열데이터 반환
/* console.log(number.concat(fruits))
console.log(number[1])
console.log(fruits[2]) */

// forEach()
/* fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
}) */

//map()

/* const a = fruits.forEach(function (fruit, index) {
    console.log(`${fruit} - ${index}`)
}) */
/* const a = fruits.forEach((fruit, index) => {
    console.log(`${fruit} - ${index}`)
})

console.log(a)

// const b = fruits.map(function (fruit, index) {
//     return {
//         id: index,
//         name: fruit
//     }
// })
// console.log(b)

const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}))
console.log(b) */