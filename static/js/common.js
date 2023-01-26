$('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.product-slider__prev'),
    nextArrow: $('.product-slider__next'),
    autoplay: false,
    infinite: false,
    autoplaySpeed: 2000,
    dots: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: "unslick"
        }
    ]
});
if($('.quiz-item').length > 0){
    var selectedPosition = $('.quiz-item.active').index() + 1;
    var allItemQuiz = $('.quiz-item').length;
    $('.product-info__quiz-title .count').text(allItemQuiz);
    $('.product-info__quiz-title .current').text(selectedPosition);
}
$('.quiz-btn .btn-primary').on('click', function (e) {
    if($('.quiz-item:last-child').hasClass('active')){
        var link =  $('.quiz-link').text();
         window.location.href = link;
    }else{
        $('.quiz-item.active').removeClass('active').next().addClass('active');
        var selectedPosition = $('.quiz-item.active').index() + 1;
        $('.product-info__quiz-title .current').text(selectedPosition);
    }
});

if ($(window).width() < 840) {
    $('.header-search .icon').on('click', function (e) {
        var $ths = $(this);
        $ths.parents('.header-search').toggleClass('active');
    });
}
$(document).mouseup(function (e){
    var div = $('.header-search');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('active');
    }

});
$(document).mouseup(function (e){
    var headerBlock = $('.header');
    if (!headerBlock.is(e.target)
        && headerBlock.has(e.target).length === 0
        && headerBlock.hasClass('active')){
        $('.header-btn').removeClass('active');
        $('.header-btn').find('.icon').toggleClass('hidden');
        $('.header').removeClass('active');
        $('body').removeClass('scroll');

    }

});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $ths = $(this);
    $ths.toggleClass('active');
    $ths.find('.icon').toggleClass('hidden');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});
$('input[type=tel]').inputmask("+380 99-99-99-999");
