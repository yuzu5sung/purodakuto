$(function($){
    $('.firstview').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:3000,
        loop:true,
    });

    $('.slide-items').slick({
        autoplay:true,
        slidesToShow:4,
        slidesToScroll:1,
        arrows:true,
        dots:true,
       
    });
});