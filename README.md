# 오늘 뭐할까?

<img src= "https://github.com/dongkey1198/ToDoList/blob/main/todo.PNG" width = 400 height = 300>
Website URL: https://dongkey1198.github.io/ToDoList/

Youtube Link: https://www.youtube.com/watch?v=R-C-LNO_Zo4&list=PLQK6CVAk91WyWH9ORWq_pDTtTsAt5JT_V&index=3

---
## 프로젝트 계획이유:
네이티브 앱 개발을 공부하다 문뜩 웹 개발에 관심이 생겨 공부하게 된 HTML, CSS, JavaScript을 연습하고 싶어 간단한 토이 프로젝트 3개를 만들어 보기로 하였다. 오늘 뭐 할까는 그중 첫 번째 토이 프로젝트이다. 다른 프레임워크들을 사용하지 않고 오직 순수 HTML, CSS, Vanila JavaScript만 사용하여 프로젝트를 기본기를 다지는 것이 목표인 프로젝트이다.

---
## 기술 스택:
- HTML
- CSS
- JavaScript
- Local Storage
- 
---
## 프로젝트 기간:
2021/02/16 ~ 2021/02/17

---
## 기능:
1. 현재 시간 표시
2. 오늘 할일 등록
3. 목록의 배경 색상 선택 및 적용
4. 목록 삭제
5. 목록 모두 삭제

---

## 프로젝트를 진행하면서 어려웠던 점:
프로젝트를 진행하며 아직 DOM에 대한 이해와 사용법에 대 이해도가 낮아 하나하나 찾아보면서 기능들을 구현하였다. 그중 항목의 색상을 선택하여 적용시키는 기능을 구현할 때 가장 많은 시간이 할애한 것 같다. 처음에 HTML로 색상들의 보기를 만든 후 CSS를 이용하여 색상을 입히고 JS에서. stlye.backgroundColor를 이용하면 CSS에서 적용된 색상 값을 가져올 수 있다고 생각하였지만 잘되지 않았다. 그리하여 여러 번의 삽질 후에 색상의 값들을 가진 배열을 JS 만든 후 HTML에 색상의 정보를 가진 엘리먼트들에게 value 값으로 배열의 인덱스 값들을 부여하고 사용자가 색상을 클릭할 시 value 값을 가져와 알맞은 색상을 배열로부터 찾을 수 있게 하였다.
