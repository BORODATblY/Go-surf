$(function(){

    $('.header__slider').slick({
        infinite: true,
        //dots: true,
        //speed: 500,
        //fade: true,
        //cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/header/arrows_left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="../images/header/arrows_right.svg" alt="">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        dots: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/header/arrows_left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="../images/header/arrows_right.svg" alt="">',
      });
    
      $('.beaches__slider').slick({
        //dots: true,
        infinite: true,
        //speed: 300,
        lazyLoad: 'ondemand',
        
        slidesToScroll: 1,
        slidesToShow: 5,
        adaptiveHeight: true,
        prevArrow: '<img class="beaches-arrows beaches-arrows__left" src="../images/header/arrows_left.svg" alt="">',
        nextArrow: '<img class="beaches-arrows beaches-arrows__rigth" src="../images/header/arrows_right.svg" alt="">',
        
      });

    

});