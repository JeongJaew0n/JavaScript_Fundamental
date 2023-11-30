// 책 예제 보기 전에 스스로 만들어보기
// 내부 상태를 지키는 캡슐화된 함수

// import {globalThis} from "./self24_02";

(function () {
let counter = (function () {
  let count = 0;

    function counter() {
        return ++count;
    }

  return counter;
})();


let creator = function () {
    let count = 0;
  
      function counter() {
          return ++count;
      }
  
    return counter;
  };
  
//   console.log(tt === globalThis);
})();