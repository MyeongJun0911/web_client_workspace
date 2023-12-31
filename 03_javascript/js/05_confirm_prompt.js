/**
 * confirm
 * - 확인 true 반환
 * - 취소 false 반환
 */
function test1(){
    const bool = confirm('이 파일을 정말 삭제하시겠습니까?')
    if(bool){
        // 삭제처리
        // ...
        alert('파일이 정상적으로 삭제되었습니다. 🍕');

    }
    else{
        // 삭제취소
        alert('파일삭제를 취소했습니다.🍔');
    }
}

/**
 * prompt
 * - 사용자로부터 한줄입력을 받는 모달(팝업창)
 * - 확인 : 사용자입력값 반환
 * - 취소 : null 반환
 * 
 */
function test2(){
    const name = prompt('당신의 이름은 무엇입니까?', '홍길동');
    console.log(name);
    
    // boolean 자동현변환
    // - 값이 있는 경우, true 변환 : "abc", 123, -123
    // - 값이 없는 경우, false 변환 : null, undefined, "", 0, 0.0
    if(name){
        //정상입력한 경우
        // alert("안녕하세요🍕" +  name + "님~");
        //${변수}: 변수로 인식, ``안에 개행문자 역시 그대로 출력
        alert(`안녕하세요🍕  ${name}님~`)
    }
    else{
        //취소한 경우
        alert("이름을 정상적으로 입력해주세요 🍔");
    }
}