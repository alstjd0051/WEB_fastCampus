//변수 유효범위(Variable Scope)
// var, let, const
// var = 함수레벨
// let, const = 블록레벨

function scope() {
  if (true) {
    console.log(a)
    const a = 123
  }
}
scope()