// const result = 'Hello world!'.indexOf('world')
// console.log(result)
// String.prototype indexOf()

const str = 'miiin_sseong'
console.log(str.length)
console.log(str.indexOf('sseong') != -1)
console.log(str.indexOf('sseongi') != -1)
console.log(str.slice(0, 5))
console.log(str.slice(6, 12))
console.log(str.replace('', 'is happy '))
console.log(str.replace(' world', ''))

const str2 = '  wsc03002@naver.com'
console.log(str2.match(/.+(?=@)/)[0])
console.log(str2)
console.log(str2.trim()) //공백문자 지우기