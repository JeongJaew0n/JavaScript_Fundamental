let g = 0;
setTimeout(()=>{g = 100;},0);
console.log(g);

let xhr = new XMLHttpRequest();

let get = (url, callback) => {
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status == 200) {
            // 처리를 하는데...
            // userId를 알고 싶다.
            callback()
        }
    }
}

new Promise(function(resolve, reject) = {
    
})

// 내부 상태를 가지고 있다. 결과 값을 가지고 있다.
// pending // undefined

// resolve => fulfilled. // result
// reject => reject.    // error

// resolve시에는 결과 값이 Promise 객체로 쌓여있다.
// tehn().tehn()
// catch(v => console(v));
// finally()

// resovle, reject 
// Promise.resolve("123");

// Response
fetch(url).then(response => rep)

// 이벤트 로더
// Callback Stack

// all, race, allSettled

//1. resolve
//2. reject