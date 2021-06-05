// this
// 일반 (Nomal) 함수는 호출 위치에서 따라 this 정의

/* const miiinsseong = {
  name: 'minsseong',
  normal: function () {
    console.log(this.name)
  },
  //  화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의
  arrow: () => {
    console.log(this.name)
  }
}

miiinsseong.normal()
miiinsseong.arrow()

const amy = {
  name: 'Amy',
  normal: miiinsseong.normal,
  arrow: miiinsseong.arrow
}

amy.normal()
amy.arrow() */

/* function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}
const miinsseong = new User('minsseong')

miinsseong.normal()
miinsseong.arrow() */

const timer = {
  name: 'miinsseong',
  timeout: function () {
    //setTimeout(함수, 시간)
    setTimeout(() => { //여기서 function함수를 안쓴건 setTimeout에서 계속 돌이때문에 값이안나온다.
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()