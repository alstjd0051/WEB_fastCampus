
const number = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// .filter() //인덱스에 배열이 있는지 확인
/* const a = number.map(number => {
    return number < 3
})
console.log(a)

const b = number.filter(number => {
    return number < 3
})
console.log(b);

console.log(numbers) */

//.find() 
/* const a = fruits.find(fruit => {
    return /^B/.test(fruit)
})
console.log(a) */

//find간소화
/* const a = fruits.find(fruit => /^B/.test(fruit))
console.log(a) */

// .findIndex() //
/* const a = fruits.findIndex(fruit => {
    return /^C/.test(fruit)
})
console.log(a) */
// .findIndex()간소화
/* const b = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(b) */

// .includes() // 있으면 true 없으면 false
/* const a = number.includes(3)
console.log(a)
const b = fruits.includes('miiin_sseong')
console.log(b) */

// .push() .unshift()
// 원본 수정됨 주의
/* number.push(5) //맨뒤
console.log(number)
number.unshift(0) //맨앞
console.log(number) */

//revers()
// 원본수정됨 주의
/* number.reverse() //배열뒤집어버리기
fruits.reverse() //배열뒤집어버리기
console.log(number)
console.log(fruits) */

//splice()
// 원본수정됨 주의

/* number.splice(2, 1, 999) //1.배열의 인덱스 시작해서 //2. 인덱스에서 지워버린다. //3. 시작인덱스에서 999를 넣는다.
console.log(number)
fruits.splice(2, 0, 'Orange')
console.log(fruits) */
