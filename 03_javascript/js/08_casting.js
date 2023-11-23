/**
 *  산술연산시 주의할 형변환
 *  number + string = string 
 *  number - string = number | NaN
 *  number * string = number | NaN
 *  number / string = number | NaN
 *  number % string = number | NaN
 * 
 * 
 *
 */

function test1(){
    console.log(3 + "3"); // '33'
    console.log(3 - "3"); // '33'
    console.log(3 * "3"); // '33'
    console.log(3 / "3"); // '33'
    console.log(3 % "3"); // '33'

    console.log(3 - "3"); // NaN(Not a Number)
    console.log(3 * "3"); // NaN(Not a Number)
    console.log(3 / "3"); // NaN(Not a Number)
    console.log(3 % "3"); // NaN(Not a Number)
    console.log(3 % "3"); // NaN(Not a Number)
    console.log(typeof NaN); //NaN는 숫자타입 number
}

/**
 * 비교 연산자
 * 타입이 달라도 값(형변환 후)이 같으면 true 반환
 * ==
 * !=
 * 
 * 엄격 비교 연산자
 * === 값/타입이 모두 같아야 true 반환
 * !==  값 또는 타입이 달라야 true 반환
 *
 * 크기비교
 * >
 * <
 * >=
 * <=
 * 
 */

function test2(){
    console.log(3 == "3"); // true // 자동으로 형변환 수행
    console.log(3 != "3"); // false

    console.log(3 === "3"); //false
    console.log(3 !== "3"); //true


    // 사전등재순 : a는 b보다 작다
    console.log("a" > "b"); // false
    console.log("a" < "b"); // true
    console.log("a" >= "b"); // false
    console.log("a" <= "b"); // true


}

    /**
     * 숫자형변환
     * - Number() 숫자로 변환. 변환불가한 문자가 하나라도 있으면 NaN을 반환
     * - parseInt() 정수로 변환. 변환불가한 문자가 있기 전까지 반환
     * - parseFloat() 실수로 변환. 변환불가한 문자가 있기 전까지 반환
     */
    function test3(){
        const num = '123.456';
        console.log(Number(num));
        console.log(parseInt(num));
        console.log(parseFloat(num));

        const num2 = '123.456원';
        console.log(Number(num2)); // NaN
        console.log(parseInt(num2)); // 123
        console.log(parseFloat(num2)); // 123.456

        const num3 = '$123.456';
        console.log(Number(num2)); // NaN
        console.log(parseInt(num2)); // 123
        console.log(parseFloat(num2)); // 123.456

        // 숫자가 아닌 문자열 제거
        const _num3 = num3.replace(/[^0-9.]/g, '');
        console.log(_num3);
        console.log(Number(_num3)); // NaN
        console.log(parseInt(_num3)); // 123
        console.log(parseFloat(_num3)); // 123.456

        
    }

    function test3(){
        //type의 상관없이 내부적으로 문자열로 관리 됨.
        const num1 = document.querySelector("#num1");
        const num2 = document.querySelector("#num2");
        const num1Val = num1.value;
        const num2Val = num2.value;

        if(isNaN(num1Val) || isNaN(num2Val)){
            alert('유효한 숫자를 입력해주세요.');
            return; //조기리턴
        }
        alert(Number(num1.value) + Number(num2.value));
    }

    /**
     * Infinity 무한수
     * - number타입
     */
    function test4(){
        console.log(10 / 0); //Infinity number
        console.log(10 / 0 === Infinity); //true
    }

    /**
     * 논리형으로의 자동형변환
     * - 모든 자료형은 boolean으로 평가될 수 있다.
     * - true (값이 있는 것) 123, 45.67, -100, "abc", [], {}, Infinity
     * - false(값이 없는 것) 0, 0.0, "", undefined, null, NaN
     */
    function test5(){
        //true
        console.log(Boolean(123));
        console.log(Boolean(45.67));
        console.log(Boolean(-100));
        console.log(Boolean("abc"));
        console.log(Boolean("[]"));
        console.log(Boolean("{}"));
        console.log(Boolean("10 / 0"));
    
        //false
        console.log(Boolean(0));
        console.log(Boolean(0.0));
        console.log(Boolean(""));
        console.log(Boolean(undefined));
        console.log(Boolean(null));
        console.log(Booleanr(Number("abc"))); // Nan

    }