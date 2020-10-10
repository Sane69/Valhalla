$(document).ready(function() {
    $('.media__slider').slick({
        slidesToShow: 5,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    })

    $('.scroll__link').click(function(e) {
        var target = $(this.hash);
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
      })

    $('.header__btn--sign, .header__btn--log').click(function() {
        $('.sign').addClass('active')
        $('.popup').addClass('active')
    })
    $('.popup__close').click(function() {
        $('.sign').removeClass('active')
        $('.popup').removeClass('active')
    })
    $('.sign').click(function() {
        $('.sign').removeClass('active')
        $('.popup').removeClass('active')
    })
    $('.header__burger').click(function() {
        $('.header__burger, .header__mobile').toggleClass('active')
    })
})

