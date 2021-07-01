"use strict";
var _a;
/**
 * Symbol
 * - ECMAScript 2015의 Symbol 입니다.
 * - new Symbol로 사용할 수 없습니다.
 * - Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있습니다.
 */
// console.log(Symbol('foo'));
console.log(Symbol("foo") === Symbol("foo"));
/**
 * Symbol
 * - 프리미티브 타입의 값을 담아서 사용한다.
 * - 고유하고 수정불가능한 값으로 만들어준다
 * - 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.
 */
// let sym = Symbol();
// let obj = {
//   [sym]: "value"
// };
// console.log(obj[sym]); //"value"
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
obj[sym];
