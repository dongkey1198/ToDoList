const wrapper = document.querySelector(".wrapper");
const clock = wrapper.querySelector(".clock");
const time = clock.querySelector(".time");
const day2 = clock.querySelector(".day");

function getTime(){
    const days = ["월","화", "수","목","금","토","일"];

    //해당 날짜와 시간의 정보를 가져온다.
    const date = new Date();

    // 사용할 각데이터들을 나누어 변수에 저장한다.
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //요일은 1 = 월 2 = 화......7 = 일 형식으로 정수로 되어있다.
    // 따라서 위와 가타이 배열에 필요한 문자열을 저장하고 불러온 요일의 값에 맞추어 
    //요일을 출력한다.
    const day = date.getDay();
    
    // 시간, 분, 초가 1자리 수일때 숫자 앞에 0을 표기해주기위한 if문
    // hours
    if(hours < 10){
        time.innerText = `0${hours}:${minutes}:${seconds}`;
        day2.innerText = `${days[day-1]}요일`;

    }
    else{
        time.innerText = `${hours}:${minutes}:${seconds}`;
        day2.innerText = `${days[day-1]}요일`;
    }

    // minutes
    if(minutes < 10){
        time.innerText = `${hours}:0${minutes}:${seconds}`; 
        day2.innerText = `${days[day-1]}요일`;  
    }
    else{
        time.innerText = `${hours}:${minutes}:${seconds}`;
        day2.innerText = `${days[day-1]}요일`;
    }

    // seconds
    if(seconds < 10){
        time.innerText = `${hours}:${minutes}:0${seconds}`; 
        day2.innerText = `${days[day-1]}요일`;   
    } 
    else{
        time.innerText = `${hours}:${minutes}:${seconds}`;
        day2.innerText = `${days[day-1]}요일`;
    }
};

function init(){
    //1초마다 화면에 표시된 시간이 변경되게 하기위해 setInterval을 사용하여 화면을 지속적으로
    //초기화 시킨다.
    setInterval(getTime, 1000);
};

init();

