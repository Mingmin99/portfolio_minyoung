window.addEventListener('load', function () {
    var dynamicText = document.getElementById('dynamic-text');
    var quotes = [
        "책은 마음을 여는 열쇠다. - 볼테르",
        "독서는 마음의 양식이다. - 테레사 드 칼쿠타",
        "한 권의 책은 수천 개의 친구보다 가치가 있다. - 명심보감",
        "책은 삶을 확장시키는 창이다. - 존슨",
        "독서는 생각의 운동이다. - 에머슨",
        "책 없는 생활은 새 없는 하늘과 같다. - 루소",
        "책을 통해 과거로 여행하고 미래를 꿈꾼다. - 엘리자베스 후어",
        "책은 마음의 약속이다. - 소포클레스",
        "독서는 육체와 영혼을 위한 최고의 음식이다. - 도로시 파커",
        "책은 우리가 되고자 하는 사람으로 우리를 이끌어준다. - 마하트마 간디",
        "책은 우리에게 날개를 달아준다. - 칼리루지베르",
        "책은 잊혀진 시대의 목소리다. - 카를라 팔라니크",
        "책을 읽는 것은 새로운 세계로의 여행이다. - 말리브루",
        "책은 항상 우리 곁에 있는 무한한 친구다. - 헨리 데이비드 소로",
        "독서는 마음의 정원을 가꾸는 것이다. - 스튜어트 체이스",
        "책은 마음을 치유하고 영감을 주는 의약품이다. - 윌리엄 엘톤",
        "책은 우리가 경험하지 않은 세상으로의 문을 열어준다. - 말콤 X",
        "독서는 단단한 삶의 기둥이다. - 로버트 파로",
        "책은 삶의 여행에서 가장 신뢰할 수 있는 동반자다. - 에이미 헨리"
    ];

    // 무작위로 문구를 선택하여 표시하는 함수
    function setDynamicText() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        dynamicText.innerText = quotes[randomIndex];
    }

    // 페이지 로드 시 초기 문구 설정
    setDynamicText();

    // 새로고침할 때마다 문구 갱신
    window.addEventListener('beforeunload', setDynamicText);
});