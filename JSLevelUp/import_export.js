import _ from 'lodash' //From `node_modules`!
import getType from './getType' //getType.js
import { random, user } from './getRandom' //getRandom.js

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(getRandom(), getRandom())
console.log(user)