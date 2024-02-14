function handleScroll() {
    var semanticElements = document.querySelectorAll('.semantic-show');

    semanticElements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect();

        if (elementPosition.top <= window.innerHeight * 0.75) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

// 스크롤 이벤트에 이벤트 핸들러 함수 연결
window.addEventListener('scroll', handleScroll);

// 초기 로딩 시 한 번 호출하여 초기 상태 설정
handleScroll();

function handleScroll() {
    // PREMIER DINING 요소 가져오기
    var premierDining = document.getElementById('lion');

    // PREMIER DINING 요소의 위치 정보 가져오기
    var premierDiningPosition = premierDining.getBoundingClientRect();

    // 스크롤 위치가 PREMIER DINING 요소의 상단으로 들어왔을 때
    if (premierDiningPosition.top <= window.innerHeight * 0.75) {
        // PREMIER DINING 요소에 클래스 추가하여 나타나게 함
        premierDining.classList.add('show');
    } else {
        // 스크롤 위치가 PREMIER DINING 요소 위로 올라갔을 때는 클래스 제거하여 사라지게 함
        premierDining.classList.remove('show');
    }
}

// 스크롤 이벤트에 이벤트 핸들러 함수 연결
window.addEventListener('scroll', handleScroll);

// 초기 로딩 시 한 번 호출하여 초기 상태 설정
handleScroll();