let str = `
010-1234-1234
wsc03002@naver.com
https://omdbapi.com/?apikey=70355c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
str = str.replace(regexp, 'AAA')
console.log(str)
