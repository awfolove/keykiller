function showVideoSubMenu() {
    var subMenu = document.getElementById('videoSubMenu');
    subMenu.style.display = 'block';
}

// 아래 함수는 필요에 따라 마우스가 영상 메뉴를 벗어나면 세부 메뉴를 숨기는 것도 추가할 수 있습니다.
function hideVideoSubMenu() {
     var subMenu = document.getElementById('videoSubMenu');
     subMenu.style.display = 'none';
 }

 document.querySelector('.video-container').addEventListener('mouseout', hideVideoSubMenu);





 function showAlbumSubMenu() {
    var subMenu = document.getElementById('albumSubMenu');
    subMenu.style.display = 'block';
}

// 아래 함수는 필요에 따라 마우스가 영상 메뉴를 벗어나면 세부 메뉴를 숨기는 것도 추가할 수 있습니다.
function hideAlbumSubMenu() {
     var subMenu = document.getElementById('albumSubMenu');
     subMenu.style.display = 'none';
 }

 document.querySelector('.album-container').addEventListener('mouseout', hideAlbumSubMenu);












 // 곡명을 배열로 지정합니다.
var songs = ["Killer", "Heartless", "가솔린 (Gasoline)"];

// 토글할 요소를 가져옵니다.
for (let i = 1; i <= 3; i++) {
    var toggle = document.getElementById("toggle-" + i);
    var content = document.getElementById("content-" + i);
    
    // 클릭 이벤트 핸들러 설정
    toggle.addEventListener("click", function(toggle, content) {
        return function() {
            // 토글할 내용의 클래스를 확인하여 표시 여부를 결정합니다.
            if (content.classList.contains("hidden")) {
                // 숨겨진 상태인 경우 표시합니다.
                content.classList.remove("hidden");
                toggle.textContent = "∨ track " + i + " : " + songs[i - 1];
            } else {
                // 표시된 상태인 경우 숨깁니다.
                content.classList.add("hidden");
                toggle.textContent = "＞ track " + i + " : " + songs[i - 1];
            }
        };
    }(toggle, content));
}
