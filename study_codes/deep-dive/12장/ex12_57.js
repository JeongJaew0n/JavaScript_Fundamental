//순수 함수와 비순수 함수

// 순수 함수
function increase_innocent() {
    return 1;
}

var count = 0;

// 비순수함수
function increase_not_innocent() { 
    return ++count;
}

/**
 * 순수함수는 함수형 프로그래밍을 위해서 지향해야 한다.
 */