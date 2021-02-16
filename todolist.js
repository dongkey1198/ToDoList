const inputBox = document.querySelector(".input-card .input input");
const addButton = document.querySelector(".input-card .input button");
const colorLists = document.querySelector(".input-card .colors");

// onkeyup은 키보드를 발생하는 이벤트이다.
// 사용자가 아무런 데이터를 inputbox에 입력하지 않았을경우 addButton을 비활성화
//시키기위해 사용했다. 만약 사용자가 데이터를 입력했을경우에만 데이터를 저장할수있다.
inputBox.onkeyup = function(){
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addButton.classList.add("active");
    }
    else{
        addButton.classList.remove("active");
    }
};

// onmouseover 이벤트를 이용하여 li 테그위에 마우스가  위치하였을때 check icon이 화면에 출력될수
//있도록 사용함
// colorLists.onmouseover = function(e){
    
//     if(e.target.nodeName !== "LI" ){
//         return;
//     }
//     let checkIcon = `<i class="fas fa-check" style="color:#80e27e";></i>`;
//     e.target.innerHTML = checkIcon;
// };

// // onmouseout 이벤트를 이용하여 li 태그위에 마우스가 없을경우 check icon이 화면에서 사라지게 함
// colorLists.onmouseout = function(e){
//     if(e.target.nodeName !== "LI" ){
//         return;
//     }
//     let checkIcon = e.target.querySelector("svg");
//     e.target.removeChild(checkIcon);
// };

colorLists.onclick = function(e) {
    if(e.target.nodeName !== "LI" ){
        return;
    }

    if(e.target.hasChildNodes()){
        let ch = e.target.querySelector("svg");
        console.log(ch);
    }
    e.target.style.border = "3px solid #80e27e"
    let checkIcon = `<i class="fas fa-check" style="color:#80e27e";></i>`;
    e.target.innerHTML = checkIcon;
};