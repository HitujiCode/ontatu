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

  // アンカーリンク
  // $(document).ready(function () {
  //   const adjustAnchorOffset = function () {
  //     const headerHeight = $(".js-header").outerHeight(); // ヘッダーの高さを取得

  //     $('a[href^="#"]')
  //       .off("click")
  //       .on("click", function (e) {
  //         e.preventDefault();

  //         const targetId = $(this).attr("href");
  //         const targetElement = $(targetId);

  //         if (targetElement.length) {
  //           const elementPosition = targetElement.offset().top;
  //           const offsetPosition = elementPosition - headerHeight;

  //           $("html, body").animate(
  //             {
  //               scrollTop: offsetPosition,
  //             },
  //             "smooth"
  //           );
  //         }
  //       });

  // ページロード時にURLのハッシュに基づいてスクロールする処理
  $(window).on("load", function () {
    var pageHash = window.location.hash;
    if (pageHash) {
      scrollToHash(pageHash);
    }

    // ページ読み込み時とリサイズ時に調整を実行
    $(window).on("resize", adjustAnchorOffset);

    adjustAnchorOffset(); // 初期読み込み時にも実行
  });
});
