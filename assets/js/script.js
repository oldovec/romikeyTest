jQuery(document).ready(function ($) {
  if ($(".services .slider_block").length) {
    let $slickers = $(".services .slider_block").slick({
      centerMode: true,
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1.2,
            autoplay: true,
            autoplaySpeed: 4000,
          },
        },
      ],
    });

    // Обработчик клика
    $(".slider_block").on("click", ".slick-slide", function () {
      var index = $(this).data("slick-index");
      $slickers.slick("slickGoTo", index);
    });
  }
});
