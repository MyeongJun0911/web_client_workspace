test1();
// 함수 선언식 정상작동
// 함수 표현식 정삭작동x
/**
 * 함수 선언식
 * - hoisting(끌어올림) 처리됨.
 * - <script>태그, js파일을 처리시에 함수가 먼저 등록
 * - 함수 선언부가 alfl 실행코드 앞으로 끌어 올려짐.
 * 
 * test1();
 * 
 * function test1(){
 *  console.log('🍔🍟🍟🍟');
 * }
 * 
 * 위와 같은 코드 허용
 */
function test1(){
    console.log('🍔🍟🍟🍟');
}

/**
 * 함수 표현식
 * - hoisting 처리 안됨.
 * - 변수에 값대입
 * - 익명함수 전달
 */

// const test1 = function(){
//     console.log('🍔🍔🍔');
// };  

/**
 * IIFE
 * - Immediately Invoked(== call) Function Expression
 * - 함수 선언과 호출을 동시에 처리 (1회용)
 * - 전역변수 노출 대신 지역변수로 처리하기 위한 용도
 */
// let cnt = 0; //전역에서 사용 권장x
(function(){
    console.log('');
    let cnt = 0;
})();

//매개변수 (선언부) 매개인자가 담길 공간
//매개인자 (호출부) 함수에 전달할 값

(function(text){
    console.log(text);
    let cnt = 0;
})('🍕🍕🍕');


/**
 * 자바스크립트 매개변수 선언과 다르게 매개인자를 전달해도 오류가 나지 않는다. 
 * argument : 함수의 모든 매개인자를 관리하는 숨은 참조배열
 */
const test2 =function(){
    foo(10, 20);
    foo(10, 20, 30);
    foo(10);
    foo();
}

//매개변수에는 자료형 작성x 동적으로 결정 됨.
const foo = function(m, n){
    console.log(m, n);
    console.log(arguments);
}

/**
 * 모든 자바스크립트 함수에는 리턴ㄱ밧이 있다.
 * 명시하지 않는 경우 undefined가 반환된다.
 */
const test3 = function(){
    console.log(bar());
};

const bar = function(){};


/**
 * 화살표함수
 * - 익명함수를 간결하게 작성하는 방법
 * - (매개변수) => {함수 실행부}
 * 
 * -생성자함수로 사용불가.
 * - 함수자체 this가 없고, 부모 this를 가져와 사용
 */
const test4 = function(){
    console.log(koo(1, 2, 3));
};

// const koo = (a, b, c) => {
//     console.log(a, b, c);
// };
// return 구문 한줄만 있을때 { return } 생략가능
const koo = (a, b, c) => a + b + c;


// const boo = (b) => {
//     console.log(b);
// }
// 실행구문이 한줄뿐일때도 {} 생략가능
const boo = (b) => console.log(b);
const hoo = h => {
    console.log(h);
    console.log(typeof h);
}


/**
 * 나머지파라미터
 * - 매개인자 여러개를 배열로 처리
 * - 전개연산자와 동일한 모양이지만, 변수 자리엠나 사용가능
 * - 일반매개변수와 혼용시 마지막에 한번만 사용가능
 */
const test5 = () => {
    const names = ['홍길동', '신사임당', '세종대왕'];
    zoo(...names); // 전개 연산자: 값으로 사용

    zoo('캡틴아메리카', '헐크', )
};

const zoo = (caption, ...nmaes) => { // 나머지파라미터: 공간으로 사용
    console.log(caption, names);
}

const test6 = () => {
    console.log(calc('plus', 10, 20));
    console.log(calc('minus', 10, 20));
    console.log(calc('multiuply', 10, 20, 30));
    console.log(calc('divide', 10, 20));
    console.log(calc('remain', 10, 20));
}

// const calc = (operator, ...numbersArr) => {
//     let result;
//     switch(operator){
//         case 'plus' : 
//         result = nums.recude((agg,n) => agg + n);
//          break;

//         case 'minus' :
//         result = nums.recude((agg,n) => agg - n);
//         break;

//         case 'multiyply' :
//         result = nums.recude((agg,n) => agg * n);
//             break;

//         case 'divide' : 
//         result = nums.recude((agg,n) => agg / n);
//             break;

//         case 'remain' : 
//         result = nums.recude((agg,n) => agg % n);
//         break;
//     }
// };

// const calc = (type, ...nums) => {
//     return nums.reduce(agg, n) => 
//         switch(type){
//             case 'plus' : return agg + n;
//             case 'minus' : return agg - n;
//             case 'multyply' : return agg * n;
//             case 'divide' : return agg / n;
//             case 'remain' : return agg % n;
//         }
//     }

/**
 * 자바스크립트에서 함순느 1급객체이다.
 * - 함수는 값이다.
 * - 변수에 대입/함수호출전달/함수리턴 값.
 */
const test7 = () => {
    const k = () => console.log('🍕🍕🍕');
    k();
    const m = k;
    console.log(m); // () => console.log('🍕🍕🍕');
    m();

    // 함수를 매개인자로 사용
    // runner(k);
    // runner(() => console.log('🍕🍕🍕🍕'));
    runnber((n) => console.log('🍿{n}'));
 
    // ★★★★★ 계산기 예제 ★★★★★
    console.log(calc2((a, b) => a + b, 10, 20)); // 30
    console.log(calc2((a, b) => a - b, 10, 20)); // -10
    console.log(calc2((a, b) => a * b, 10, 20)); // 200
    console.log(calc2((a, b) => a / b, 10, 20)); // 0.5
    console.log(calc2((a, b) => a % b, 10, 20)); // 10

};

// const runnber = (f) => f();

const runnber = (f) => {
    for(let i = 0; i < 10; i++){
        f(i + 1);
    }
};

const calc2 = (f, a, b) => {
    // console.log(f, a, b);
    return f(a, b);
};

/**
 * 함수를 리턴값으로 사용하기
 */
const test8 = () => {
    const k = getFunctuon();
    // const k = () => console.log('🍕🍕🍕);
    k('길동아 디저트 먹어~'); // 길동아 디저트 먹어~ 🍕🍕🍕

    const frineds = ['길동', '철수', '영희', '혁'];
    frineds.forEach((name) => {
        k(name, '디저트 먹어~');
    });

    const sayHello = gerFunction2('Hello');
    // const sayHello = (name) => console.log('Hello~ ${name}');
    sayHello('길동');
    const sayGoodbye = getFunction2('Goodbye');
    sayHello('길동');
    // 돈 좀 꿔줘~ 길동;
};

const getFunction = () => {
    return (name, text) => console.log(`${name }${text} 🍕🍕🍕`);
}

const getFunction2 = (greeting) => {
    return (name) => console.log(`${greering}~ ${name}`);
};

/**
 * tagMaker 함수를 작성하세요.
 * - 특정태그를 만드는 함수를 반환
 * - 반환된 함수의 태그의 내용전달해 호출가능
 * - div#result에 요소를 추가
 */

const test9 = () => {
  const weirtP = tagMaker('p');
};

const tagMaker = (tag) => {
    return (title) => `${tag}.innerHTML`;
}
