const str = `
010-1234-1234
wsc03002@naver.com
https://omdbapi.com/?apikey=70355c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') //생성자함수 정규식
const regexp = /the/gi //리터럴 방식

console.log(str.match(regexp))