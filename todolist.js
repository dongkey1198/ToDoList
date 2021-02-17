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

colorLists.onclick = function(e) {
    if(e.target.nodeName !== "LI" ){
        return;
    }
    inputBox.style.backgroundColor = colors[e.target.value];
    color = colors[e.target.value];
};

deleteAllBtn.onclick= function(){
    arr = [];
    localStorage.setItem("todo", JSON.stringify(arr)); // transfroming js object into a json string
    showTask();
};

addButton.onclick = function(){
    let inputData = inputBox.value;

    if(inputData.length < 1){
        return;
    }

    let getLocalStorage = localStorage.getItem("todo");
    if(getLocalStorage === null){
        arr = [];
    }
    else{
        arr = JSON.parse(getLocalStorage);
    }

    let tmp = [inputData, color];
    arr.push(tmp);
    console.log(arr);

    localStorage.setItem("todo", JSON.stringify(arr));
    showTask();
    inputBox.value = "";
    inputBox.style.backgroundColor = "#fff";
    color = colors[0];
};

function showTask(){
    let getLocalStorage = localStorage.getItem("todo");
    if(getLocalStorage === null){
        arr = [];
    }
    else{
        arr = JSON.parse(getLocalStorage);
    }

    let newLiTag ='';
    arr.forEach((element, index) => {
        newLiTag += `<li style ="background-color:${element[1]};">${index+1}. ${element[0]}<span onclick="deleteTask(${index});"><i class="fas fa-trash"></i></span></li>`;
    });
    
    todoList.innerHTML = newLiTag;
    
    countTask();
};

function countTask(){
    taskCount.textContent = `오늘 할일이 ${arr.length}개 남았습니다!!!`
};

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("todo");
    arr = JSON.parse(getLocalStorage);
    arr.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(arr));
    showTask();
}

