/**
 * String
 * - "", '', ''로 리터럴을 감싸서 표현
 * - String내장객체에서 제공하는 api 사용
 */
function test1(){
    const str ="Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); //23
    // for(let i = 0; i < str.length; i++)
    //     console.log(str[i], str.charAt(i));
    console.log(str.toLowerCase()); // 실제 str을 변경하는 것은 아님. Immutable
    console.log(str.toUpperCase()); // 실제 str을 변경하는 것은 아님. Immutable
    console.log(str);

    console.log(str.indexOf('Sam')); // 6
    console.log(str.indexOf('Apple')); // 0
    console.log(str.lastIndexOf('Apple')); // 0

    // substring(start, end)
    // substr(start, length)
    console.log(str.substring(6, 9)); // Sam
    console.log(str.substr(6, 3)); // Sam 
    console.log(str.substring(6)); // Samsung PineApple
    console.log(str.substr(6)); // Samsung PineApple

    // replace(search, newStr)
    // replaceAll(search, newStr) - ECMA(JS표준단체 JS의 이명 Ecma Script(ES))2021에 추가
    console.log(str.replace('Apple', '사과'));
    console.log(str.replaceAll('Apple', '사과'));

    console.log(str.split(' ')); // ['Apple', 'Samsung', 'PineApple']
}

/**
 * 
 * @실습문제:사용자입력값에서 알파벳개수 세기
 * - prompt 통해 임의의 문자열을 받고, 거기에 알파벳 개수를 세서 출력하기 
 */
function test2() {
    let count = 0;
    let inputStr = prompt("문자열을 입력하십시오.");
    for(let i = 0; i < inputStr.length ; i++){
        if(isLowerAlpha(inputStr.charAt(i)) ||  isUpperAlpha(inputStr.charAt(i))){
            count = count + 1;
        }
    }
    console.log("알파벳의 갯수는 " + count + "입니다.");
}

/**
 * Math
 * - random
 * - ceil
 * - round
 * - floor
 * - trunc
 */
function test3(){
    // 0.0이상 1.0미만의 실수를 반환
    // Math.trunc(Math.random() * 경우의 수 + 최솟값)
    console.log(Math.trunc(Math.random() * 10 + 1));

    console.log(Math.ceil(12.34));
    console.log(Math.round(12.5));
    console.log(Math.floor(12.34));
    console.log(Math.trunc(12.34));
    
    console.log(Math.floor(-3.4), Math.trunc(-3.4));

    // 123.456 반올림해서 123.46이 출력
    // 구현 방식에 주의
    console.log(Math.round(123.456 * 100)/100);

}

function isLowerAlpha(input){
    if(input >= 'a' && input <= 'z'){
        return true;
    }
    else{
        return false;
    }
}

function isUpperAlpha(input){
    if(input >= 'A' && input <= 'Z'){
        return true;
    }
    else{
        return false;
    }
}

/**
 * @실습문제: 난수목록태그 만들고, 짝수만 컬러변경하기
 * - ul#nums하위의 li태그에 난수대입
 * - 짝수인 경우 컬러변경
 * - 매번 버튼 클릭시 숫자/컬러가 새로 지정되어야 함.
 */
function test4(){
    console.log(document);
    const list = document.querySelectorAll("ul#nums li");
    console.log(list);
    for(let i = 0; i < list.length; i++){
        list[i].innerText = Math.floor(Math.random()*100 + 1);

            
    }
    
}

/**
 * Date
 * - 날짜/시각을 관리하는 객체
 * - 기본적으로 시스템 시각을 읽어와서 사용(OS에 의존적).
 */
function test5(){
    const now = new Date(); // new 생성자 함수 호출!(생성자 != 생성자 함수)
    console.log(now);

    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); // getMonth() : 0 ~ 11;
    console.log(now.getDate());

    console.log(now.getHours());
    console.log(now.getMinutes);
    console.log(now.getSeconds());

    console.log(Date.now()); // UTC Time/초 (Epoch Time)

    const date = new Date(Date.now()); // UTC Time을 Date객체 생성하기
    
    // 특정 날짜/시각객체
    const someday =new Date(1999, 8, 9, 12, 30); // 월은 0-based 숫자
    console.log(someday);


}

/**
 * start, end시각을 밀리초로 각각 구해서 차이를 계산
 */
function test6(){
    // const start = Date.now();
    // foo();
    // const end = Date.now();
    // console.log((end - start), 'ms');

    console.time('Test');
    foo();
    console.timeEnd('Test');
}

function foo(){
    let sum = 0;
    for(let i = 0; i < 1000000; i++)
        sum += i;
    console.log(sum);
}