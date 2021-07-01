/**
 * Primitive Type
 * - 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형입니다
 * - 프리미ㅣ브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분
 * * (ES2015 기준)6가지
 *  - boolean
 *  - number
 *  - string
 *  - symbol(ES2015)
 *  - null
 *  - undefined
 */
// let name = 'mark';
// name.toString();

// literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다
// true;
// 'hello';
// 3.14;
// null;
// undefined;

// 또는 래퍼 객체로 만들 수 있다.
new Boolean(false); //typeof new Boolean(false) : 'object'
new String('world'); //typeof new String('wolrd') : 'object'
new Number(42); //type new Number(42) : 'object'

