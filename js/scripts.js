
//SIOS
$(".sios").click(function(){
    $(".mensaje").toggle();
});

if(document.getElementById('exampleModal')){
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: true
    })
    myModal.show();
}

$(window).on('load resize orientationchange', function() {
    $('.arrendatario-slider').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() >= 992) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: false,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 2,
                    prevArrow: '<a href="#" class="next"><img src="img/next.png" alt=""></a>',
                    nextArrow: '<a href="#" class="prev"><img src="img/prev.png" alt=""></a>',
                    responsive: [  
                        {
                            breakpoint: 767,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1                            
                            }
                        }
                    ]                   
                });
            }
        }
    });
});


$(window).on('load resize orientationchange', function() {
    $('.slider-modalidades').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width()  > 1400) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: true,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,                                        
                    slidesToScroll: 1,
                    responsive: [  
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode:true,
                                centerPadding:'0px'                           
                            }
                        }
                    ]                   
                });
            }
        }
    });
});


$(window).on('load resize orientationchange', function() {
    $('.entradas-blog').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width()  >= 1200) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: true,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,                                        
                    slidesToScroll: 1,                    
                    responsive: [  
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode:true,
                                centerPadding:'0px'                           
                            }
                        }
                    ]                   
                });
            }
        }
    });
});

