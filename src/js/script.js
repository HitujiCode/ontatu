// // ヘッダーの高さを動的に取得
// function updateHeaderHeight() {
//   let header = document.getElementsByClassName("js-header");
//   let headerHeight = header.offsetHeight + "px";
//   document.documentElement.style.setProperty("--header-height", headerHeight);
// }
// window.addEventListener("load", updateHeaderHeight);
// window.addEventListener("resize", updateHeaderHeight);

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ページトップボタン
  $(window).on("scroll", function () {
    let scrollPosition = $(this).scrollTop();
    let toTop = $(".js-totop");

    if (scrollPosition > 70) {
      toTop.fadeIn();
    } else {
      toTop.fadeOut();
    }
  });
  $(".js-totop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // タブ
  $(".js-tab-head").on("click", function () {
    $(".js-tab-head").removeClass("is-active");
    $(".js-tab-content-item").removeClass("is-active");
    $(this).addClass("is-active");
    let number = $(this).data("number");
    $("#" + number).addClass("is-active");
  });

  // アコーディオン
  $(".js-faq-question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is-open");
    $("js-faq-answer").toggleClass("is-open");
  });
});
