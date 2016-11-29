 $(function() {


  // MATERIAL DISIGN INK EFFECT 
          var ink, d, x, y;
          $(".ripplelink").click(function(e) {
            if ($(this).find(".ink").length === 0) {
              $(this).prepend("<span class='ink'></span>");
            }

            ink = $(this).find(".ink");
            ink.removeClass("animateRipple");

            if (!ink.height() && !ink.width()) {
              d = Math.max($(this).outerWidth(), $(this).outerHeight());
              ink.css({
                height: d,
                width: d
              });
            }

            x = e.pageX - $(this).offset().left - ink.width() / 2;
            y = e.pageY - $(this).offset().top - ink.height() / 2;

            ink.css({
              top: y + 'px',
              left: x + 'px'
            }).addClass("animateRipple");
          });

// END OF INK EFFECT
 $('header .nav-show ul.nav.navbar-nav').hide();

$('header .nav-show .hamburger').on('click',function(){
  $('header .nav-show ul.nav.navbar-nav').fadeIn();
  $('header .nav-show ul.nav.navbar-nav').addClass("active");
}); 

$('header .nav-show .close').on('click',function(){
$('header .nav-show ul.nav.navbar-nav').removeClass("active");
  $('header .nav-show ul.nav.navbar-nav').fadeOut();
  
}); 
$('header .nav-show .nav-content a').on('click',function(){
  $('header .nav-show ul.nav.navbar-nav').removeClass("active");
    $('header .nav-show ul.nav.navbar-nav').fadeOut();
  
}); 
$('header .nav-show .nav-content span').on('click',function(){
  $('header .nav-show .nav-content a').removeClass("active");
  $(this).addClass("active");
});

 
});