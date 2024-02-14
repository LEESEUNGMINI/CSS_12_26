
let div = document.querySelector('.div3');

// 현재 상태 확인 후 반대로 설정
function toggleRooms() {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('roomList').addEventListener('click', toggleRooms);



let div1 = document.querySelector('.div1');

// 현재 상태 확인 후 반대로 설정
function toggleRoom() {
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('lia').addEventListener('click', toggleRoom);


let div2 = document.querySelector('.div2');

// 현재 상태 확인 후 반대로 설정
function toggleRoo() {
  if (div2.style.display === "none") {
    div2.style.display = "block";
  } else {
    div2.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('lib').addEventListener('click', toggleRoo);

let div4 = document.querySelector('.div4');

// 현재 상태 확인 후 반대로 설정
function toggleRo() {
  if (div4.style.display === "none") {
    div4.style.display = "block";
  } else {
    div4.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('lid').addEventListener('click', toggleRo);

let div5 = document.querySelector('.div5');

// 현재 상태 확인 후 반대로 설정
function toggleR() {
  if (div5.style.display === "none") {
    div5.style.display = "block";
  } else {
    div5.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('lig').addEventListener('click', toggleR);


let hidden_section = document.querySelector('#hidden_section');

// 현재 상태 확인 후 반대로 설정
function toggleR() {
  if (hidden_section.style.display === "none") {
    hidden_section.style.display = "block";
  } else {
    hidden_section.style.display = "none";
  }
}

// 'click' 이벤트 리스너를 추가합니다.
document.getElementById('hidden_div').addEventListener('click', toggleR);


let a1 = document.querySelector('.a1')

function ler(){
  alert("현재 운영하지 않는 페이지 입니다.")
}