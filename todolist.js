const inputBox = document.querySelector(".input-card .input input");
const addButton = document.querySelector(".input-card .input button");
const colorLists = document.querySelector(".input-card .colors");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const taskCount = document.querySelector(".footer span");

const colors = ["#ff616f", "#ff79b0","#ff79ff", "#9effff", "#e7ff8c", "#ffa06d"];
let color = colors[0];
let arr;


showTask();

// 사용자가 input에 데이터를 입력하지 않을경우 버튼이 비활성화 되게보임
inputBox.onkeyup = function(){
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addButton.classList.add("active");
    }
    else{
        addButton.classList.remove("active");
    }
};

// 사용자가 카드의 색상을 선택할경우 event 파라미터를 받아 어떤 색상을 선택하였는지 값을 받을수있음
colorLists.onclick = function(e) {
    // 클릭한 노드가 li태그가 아닐경우 리턴시킨다.
    if(e.target.nodeName !== "LI" ){
        return;
    }
    // 미리 li 테그에 부여한 value값과 colors의 인덱스 값에 맞추어 알맞은 색상값을 input의 background 값으로 설정하고  
    // color 변수에 할당한다
    inputBox.style.backgroundColor = colors[e.target.value];
    color = colors[e.target.value];
};

// 사용자가 모두 삭제 버튼을 클릭할시 빈배열을이용하여 로컬 데이터베이스에 저장된 값을 초기화 시킨다.
deleteAllBtn.onclick= function(){
    arr = [];
    localStorage.setItem("todo", JSON.stringify(arr)); // transfroming js object into a json string
    showTask();
};

// 사용자가 input 데이터를 입력한후 addbutton을 클릭하면 로컬 데이터베이스에 값이 저장된다.
addButton.onclick = function(){
    let inputData = inputBox.value;

    //사용자가 아무 값도 입력하지 않았을경우 리턴한다.
    if(inputData.length < 1){
        return;
    }

    // 로컬 데이터베이스에서 todo라는 키값으로 데이터를 불러온다.
    let getLocalStorage = localStorage.getItem("todo");
    
    // 만약 todo라는 키값으로 저장된 데이터가 없을경우 빈 배열을 생성해준다.
    if(getLocalStorage === null){
        arr = [];
    }
    // 데이터가 존재할경우 로컬 데이터베이스에서 불러온 데이터 값들은 JSON형식으로 읽어진다 JS형태로 파싱을 해줘야한다.
    else{
        arr = JSON.parse(getLocalStorage);
    }

    //  로컬 데이터베이스에 2차원 배열을 이용하여 사용자가 입력한 데이터와 선택한 색상의 값을 저장해준다.
    let tmp = [inputData, color];
    arr.push(tmp);

    //  로컬 데이터베이스로 데이터를 저장할때는 다시 JSON형식으로 변환시켜 보내야한다.
    localStorage.setItem("todo", JSON.stringify(arr));
    showTask();

    // 저장이 완료되면 사용자가 input에 입력한 데이터와 선택한 색상이 다시 default상태로 돌아간다
    inputBox.value = "";
    inputBox.style.backgroundColor = "#fff";
    color = colors[0];
};

// 이미 저장되어있는 데이터를 불러 화면에 출력한다.
function showTask(){
    let getLocalStorage = localStorage.getItem("todo");
    if(getLocalStorage === null){
        arr = [];
    }
    else{
        arr = JSON.parse(getLocalStorage);
    }

    // 데이터를 읽어드려 foreEach 메서드를 사용하여 데이터들을 알맞은 위치에 배치하고 li테그를 생성하여
    // newLiTag변수에 너어준다. 그후 innerHTML을 이용하여 ul테그에 추가시켜준다.
    let newLiTag ='';
    arr.forEach((element, index) => {
        newLiTag += `<li style ="background-color:${element[1]};">${index+1}. ${element[0]}<span onclick="deleteTask(${index});"><i class="fas fa-trash"></i></span></li>`;
    });
    
    todoList.innerHTML = newLiTag;
    
    countTask();
};

// 배열의 길이를 이용하여 몇개의 데이터를 저장하였는지 출력해준다.
function countTask(){
    taskCount.textContent = `오늘 할일이 ${arr.length}개 남았습니다!!!`
};

// li 테그를 추가해줄때 그안에 onclik함수를 호출하며 index값을 매겨변수로 보내주었다
// 현제 배열안에 index값에 해당된 데이터를 제거한후 로컬 데이터베이스를 업데이트 시켜준다.
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("todo");
    arr = JSON.parse(getLocalStorage);
    arr.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(arr));
    showTask();
}

