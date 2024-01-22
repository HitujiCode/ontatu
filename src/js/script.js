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
  $(document).ready(function () {
    const fixedHeaderHeight = 100; // 固定ヘッダーの高さ
    let lastWindowHeight = $(window).height(); // 初期ウィンドウの高さ

    function adjustAnchorOffset() {
      $('a[href^="#"]')
        .off("click")
        .on("click", function (e) {
          const href = $(this).attr("href");

          if (href.length > 1 && href.startsWith("#")) {
            e.preventDefault();

            const targetElement = $(href);

            if (targetElement.length) {
              const elementPosition = targetElement.offset().top;
              const currentWindowHeight = $(window).height();
              const progressBarHeight = lastWindowHeight - currentWindowHeight;

              const offsetPosition =
                elementPosition - fixedHeaderHeight - progressBarHeight;

              $("html, body").animate(
                {
                  scrollTop: offsetPosition,
                },
                "smooth"
              );

              lastWindowHeight = currentWindowHeight; // ウィンドウの高さを更新
            }
          }
        });
    }

    // リサイズ時にウィンドウの高さを更新
    $(window).on("resize scroll", function () {
      lastWindowHeight = $(window).height();
    });

    adjustAnchorOffset(); // 初期読み込み時に実行
  });
});
