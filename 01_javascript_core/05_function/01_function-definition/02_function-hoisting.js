/* 02. function-hoisting(함수 호이스팅) */

console.log(hello('이몽룡'));
// console.log(hi('반가워'));

/* 함수 선언문(js 코드 상에서 먼저 해석됨, 반드시 이름이 있어야 함(익명함수 x)) */
function hello(name) {
    return `${name}님 반갑소!`;
}

/* 함수 표현식 */
var hi = function(name) {
    return `${name} 안녕~`;
}

console.log(`함수 표현식 이후: ${hi('반갑다')}`);

/* 
    함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 해석된다.
    따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
    함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트
    고유의 특징을 호이스팅이라고 한다.
*/