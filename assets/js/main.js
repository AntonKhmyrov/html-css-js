$(document).ready(function () {
    $('.main__slider-first').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false
    });
});

$(document).ready(function () {
    $('.main__slider-two-body').slick({
        autoplay: false,
        arrows: false,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    // Добавляем функциональность для кнопок управления
    $('.slider-prev').click(function () {
        $('.main__slider-two-body').slick('slickPrev');
    });

    $('.slider-next').click(function () {
        $('.main__slider-two-body').slick('slickNext');
    });
});