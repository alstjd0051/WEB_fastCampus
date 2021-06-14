import _ from 'lodash' //From `node_modules`!
import getType from './getType' //getType.js
// import { random, user as miiin_sseong } from './getRandom' //getRandom.js
import * as A from './getRandom'
// * = 와일드카드는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
// console.log(random(), random())
console.log(A)