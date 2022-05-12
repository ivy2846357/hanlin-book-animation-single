// 自定義屬性
var winWidth = $(window).width();
var ratio = winWidth / 1920;
var posX = Math.max(80 * ratio, 30);

// 進下一頁
$(".front:not(.last)").click(function (event) {
  // 點擊放大鏡打開 PDF 不要進下一頁
  let target = $(event.target)
  if (target.is('.open-pdf')) {
    retuen
  }
  // 進下一頁
  $(".book").addClass("open").addClass("openbook")
  $(this).parent(".paper").addClass("open");
});

// 回上一頁
$(".back").click(function (event) {
  // 點擊放大鏡打開 PDF 不要回下一頁
  let target = $(event.target)
  if (target.is('.open-pdf')) {
    retuen
  }
  // 回翻時，如果點擊回第一頁的動作
  if ($(this).parent(".paper").index() == 0) {
    $(".book").removeClass("open").removeClass("openbook");
    $(this).parent(".paper").removeClass("open");
  } else {
    // 回上一頁
    $(this).parent(".paper").removeClass("open");
  }
});

// 全螢幕設定
let fullscreen;
let eBook = document.querySelector('#container');
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    // document.documentElement.requestFullscreen();
    eBook.requestFullscreen();
    $(".book").addClass("fullbook");
    fsEnter.innerHTML = "離開全螢幕";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    $(".book").removeClass("fullbook");
    fsEnter.innerHTML = "進入全螢幕";
  }
});