$(function ($) {
  $(".firstview").bgSwitcher({
    images: [
      "images/background1.jpg",
      "images/background2.jpg",
      "images/background3.jpg",
      "images/background4.jpg",
      "images/background5.jpg",
    ],
    interval: 3000,
    loop: true,
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      var targetElement = $(".fadein").offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(".fadein").css("opacity", "1");
        $(".fadein").css("transform", "translateY(0)");
        $(this).addClass("scroll-in");
      }
    });
  });

  $(".slide-items").slick({
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      size: { value: 1 },
      move: { speed: 7 },
    },
  });
});
