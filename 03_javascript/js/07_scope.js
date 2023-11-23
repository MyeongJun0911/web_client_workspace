        //전역
        let a = 10;
        console.log(a);

        function foo(){
            //지역
            let b = 20;
            console.log(b);

            //전역변수 접근
            a = 30;
        }

        if(true){
            //지역
            let c = 99;
            console.log(c);
        }

        //오류가 발생하면 이하 코드 실행 불가할 수 있음.
        // consile.log(i);

        for(let i = 0; i < 5; i++){
            //js에서도 한 줄이면 생략 가능.
            //지역
            console.log(i);
        }

        let j;
        for(let j = 0; j < 5; j++){
            console.log(j);
        }
        
        /**
         * 변수사용시 사용하는 키워드
         * - const 블럭 스코프. 상수 선언시
         * - let 블럭 스코프. 변수 선언시
         * - var 함수 스코프(함수블럭만 인정) 변수선언시.
         */

        function test(){
            var a = 10;
            var a = 20; // 문법오류 아님
            console.log(a);

            const b = 123;
            // b = 456;

            let c = 1;
            c = 2;
            console.log(c);

            // let c = 'ㅋㅋㅋ';
        }