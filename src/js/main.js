$('.mobile div').on('click', () => {
  $('.mobile div').toggleClass('active');
  $('.mobile nav').toggleClass('open');
  $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
  $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}

// Slider testimonials
$('.reviews-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Accordion
$(document).ready(function () {
  $('.accordion__title').click(function(event) {
    if($('.accordion').hasClass('one')){
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300)
  });
})
