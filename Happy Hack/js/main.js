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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10px 0px" },
  );

  document.querySelectorAll(".fadein").forEach((section) => {
    observer.observe(section);
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
