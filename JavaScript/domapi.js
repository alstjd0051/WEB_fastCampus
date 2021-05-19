// let boxEl = document.querySelector('.box');

// // HTML 요소(Element) 1개 검색찾기
// // const boxEl = document.querySelector('.box');

// //HTML 요소에 적용할 수 있는 메소드!
// // boxEl.addEventListener();

// // //인수(Arguments)를 추가 가능!
// // boxEl.addEventListener(1, 2);

// // //1 - 이벤트(Event, 상황)
// // boxEl.addEventListener('click', 2);

// // //2 - 핸들러(Handler, 실행할 삼수)
// boxEl.addEventListener('click', function () {
//   console.log('Click~!');
// });

// //HTML 요소 (Element) 검색/찾기
// const boxEK = document.querySelector('.boz');

// // 요소의 클래스 정보 객체 활용
// boxEK.classList.add('active');
// let isContains = boxEK.classList.contains('active');
// console.log(isContains); //true

// boxEK.classList.remove('active');
// isContains = boxEK.classList.contains('active');
// console.log(isContains); //false

// boxEK.addEventListener('click', function () {
//   console.log("뻥이야");
// });


// boxEl.addEventListener('click', function () {
//   console.log('Click~!');
//   boxEl.classList.add('active');
//   console.log(boxEl.classList.contains('active'));
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
// });

// //HTML 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// //찾은 요소들 반복해서 함수실행
// // 익명 함수를 인수로 추가
// boxEls.forEach(function () {});

// //첫 번째 매개변수 (boxEl) : 반복 중인 요소.
// // 두 번쨰 매개변수(index) : 반복 중인 번호
// boxEls.forEach(function (boxEl, index) {});

// //출력
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index +1}`);
//   console.log(index.boxEl);
// });




// DOM_API ch.2

const boxEl = document.querySelector('.box');

//Getter, 값을 얻는 용도
console.log(boxEl.textContent); //box

//Setter, 값을 지정하는 용도
boxEl.textContent = 'miiin_sseong';
console.log(boxEl.textContent); //miiinsseong