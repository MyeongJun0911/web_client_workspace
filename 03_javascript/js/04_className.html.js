/**
 * class를 통한 제어
 * - className(문자열)
 * - classList객체
 *  - add(className: string)
 *  
 */
function checkSubject(checkbox){
    console.log('checkSubject', checkbox);
    // 부모td 찾기
    // 자식입장에서는 부모는 only 1개.
    const td = checkbox.parentElement;
    console.log(td);
    // .on Toggle
    // td.className =checkbox.checked ? "on" : "";
    td.classList.toggle("on");
    // if(checkbox.checked){
    //     // td.className = "on"
    //     td.classList.add("on");
    // }
    // else{
    //     // td.className = "";
    //     td.classList.remove("on");
    // }

}