
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


$('.ae-select-content').text($('.nav-pills > li.selected').text());
    var newOptions = $('.nav-pills > li');
        newOptions.click(function() {
            $('.ae-select-content').text($(this).text());
            $('.nav-pills > li').removeClass('selected');
            $('.ae-dropdown').removeClass('n-egative');
            $('.backmenu').removeClass('minus');
            $(this).addClass('selected');
        });

    var aeDropdown = $('.ae-dropdown');
        aeDropdown.click(function() {
        if ($(".submenu.ae-hide")[0]){
            $('.submenu').removeClass('ae-hide');            
            $('.submenu').addClass('d-block');
            $('.ae-dropdown').addClass('n-egative');
            $('.backmenu').addClass('minus');
        }else{
            $('.submenu').addClass('ae-hide');            
            $('.submenu').removeClass('d-block');
            $('.ae-dropdown').removeClass('n-egative');
        }            
        $('.nav-submenu.inferior').slideToggle(200);        
        }); 
        
    $('.nav-submenu.inferior').click(function() {
        if (($(window).width())  < 992){
            $('.submenu').addClass('ae-hide');            
            $('.submenu').removeClass('d-block');
            $('.nav-submenu.inferior').slideToggle(200);
        }
    }); 
    
$(window).on('load resize orientationchange', function(){
    if (($(window).width())  > 991){
        $('.nav-submenu.inferior').css('display','flex');
    }else{
        if ($(".submenu.ae-hide")[0]){
            $('.nav-submenu.inferior').css('display','none');
        }else{
            $('.nav-submenu.inferior').css('display','block');
        }        
    }
    
});


$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    }    
});


function formatNumber(n) {  
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}


function formatCurrency(input) {
  var input_val = input.val();
  
  if (input_val === "") { return; }
  

  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    

    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    

  input.val(input_val);

  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}
