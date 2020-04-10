$(function () {

  $('.slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });

  $('.menu__burger').on('click', function () {
    $('.menu__burger, .menu__list, .header__logo').toggleClass('active')
  });

  $(document).ready(function () {
    var a = 0;
    $(window).scroll(function () {
      var oTop = $('.service__quantity').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.service__quantity').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },
  
            {
  
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
  
            });
        });
        a = 1;
      }
    });
  });
});