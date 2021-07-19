const user = {
    name: miiin_sseong,
    age: 26,
    emails: [
        'wsc03002@naver.com',
        'neo@zillinks.com'
    ]
}


// localStorage.setItem('user', user)
// localStorage.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
