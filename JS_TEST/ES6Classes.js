//ES6 Classes

const user = {
  name: 'minseong',
  normal () {
    console.log(this.name)
  },
  arrow:() => {
    console.log(this.name)
  }
}

user.normal()
user.arrow()