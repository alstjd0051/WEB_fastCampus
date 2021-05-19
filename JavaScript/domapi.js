let boxEl = document.querySelector('.box');

// HTML 요소(Element) 1개 검색찾기
// const boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드!
// boxEl.addEventListener();

// //인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1, 2);

// //1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);

// //2 - 핸들러(Handler, 실행할 삼수)
boxEl.addEventListener('click', function () {
  console.log('Click~!');
});

//HTML 요소 (Element) 검색/찾기
const boxEK= document.querySelector('.boz');

// 요소의 클래스 정보 객체 활용
boxEK.classList.add('active');
let isContains = boxEK.classList.contains('active');
console.log(isContains); //true

boxEK.classList.remove('active');
isContains = boxEK.classList.contains('active');
console.log(isContains); //false