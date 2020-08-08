// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require jquery
//= require jquery_ujs


$(function() {
  // メニューボタンの表示
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
    $('.menu-btn1').toggleClass('d-none');
    $('.menu-btn2').toggleClass('d-none');
  });

  // ヘッダーのslick
  var $slide = $(".header-img-slide")
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".preve-slide", this).removeClass("preve-slide　slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");
    
  // 要素の非表示/表示
  // $(window).scroll(function (){
  //   $(".content-fade").each(function(){
  //     var imgPos = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowHeight = $(window).height();
  //     if (scroll > imgPos - windowHeight + windowHeight/5){
  //       $(this).addClass("fade_on");
  //     } else {
  //       $(this).removeClass("fade_on");
  //     }
  //   });
  // });

  $(window).scroll(function (){
    $('.content-fade').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('fade_on');
        }
    });
});
  

  // top移行ボタン
  $(function() {
    var topBtn = $('.scroll-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  });

  // こだわりslick
  $('.commitment-box').slick({
        autoplay: true, // 自動再生で切り替えをする時間
        autoplaySpeed: 4000, // 自動再生や左右の矢印でスライドするスピード
        speed: 1000,
        infinite: true, //スライドのループ有効化
        arrows: true,
        dots: true, //ドットのナビゲーションを表示
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
        responsive: [{
        breakpoint: 1200, //ブレークポイントが1200px
        settings: {
            arrows: false,
            slidesToShow: 1, //表示するスライドの数
            slidesToScroll: 1, //スクロールで切り替わるスライドの数
            }
        }, {
        breakpoint: 500, //ブレークポイントが480px
        settings: {
            arrows: false,
            slidesToShow: 1, //表示するスライドの数
            slidesToScroll: 1, //スクロールで切り替わるスライドの数
            }
        }]
    });
    
});

