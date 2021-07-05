/** Undefined & Null
 * undefined와 null은 실제로 각각 undefined 및 null이라는 타입을 가집니다.
 * void와 마찬가지로, 그자체로는 그다지 유용하지 않는다.
 * 둘다 소문자만 존재한다.
 */

// 이 변수들에 할당할 수 있는 것들은 거의 없다.
// let u: undefined = undefined;
// let n: null = null;

/**
 * undefined & null are subtypes of all other types.
 * 설정을 하지 않으면 그렇습니다.
 * number에 null 또는 undefined를 할당 할 수있다는 의미입니다.
 * 하짐나 컴파일 옵션에서 `--strictNullchecks` 사용하면, null과 undefined는 void 나 자기 자신들에게만 할당할 수 있습니다.
 *  - 이경우 null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다
 */
// let name: string = null;
// let age: number = undefined;

// strictNullchecks => true
// Type 'null' is not assignable to type 'string'.
// let name: string = null; // (X)

// null => null || void, undefined => undefined => undefined || void
// Type 'null' is not assignable to type 'undefined'.
// let u: undefined = null; //(x)
// let v: void = undefined; //(O)
// let union: string | null | undefined = 'str'; //union type

// let MyName: string = undefined;

/** null in JavaScript
 * null이라는 값으로 할당된 것을 null이라고 한다
 * 무언가가 있느데, 사용할 준비가 덜 된 상태.
 * null이라는 타입은 null 이라는 값만 가질 수 있다.
 * 런타임에서 typeof 연산자를 이용해서 알아내면 object 이다
 */

/** undefined in JavaScript
 * 값을 할당하지 않은 변수는  undefined 라는 값을 가진다
 * 무언가가 아예 준비가 안된상태
 * object의 property가 없을 때도 undefined
 * 런타임에서 typeof연산자를 이용해서 알아내면, undefined이다
 */