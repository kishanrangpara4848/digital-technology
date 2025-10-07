/////       menu      ////////////////////////////


  
           document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "left-front"
                       },
                       "theme": "light"
                    });
                }
            );
        /////////////////////



   /////////////    tabing      //////////////

/*   


/// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.four-content').hide();
$('.four-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.four-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


/////////////////////////

*///////////


///////counter start ////////

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 2;
  }

});


///////counter end ////////



//////////////   slider   ///////////


$('.four-content .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     autoplayTimeout: 3000,
   autoplay:false,
  autoplayHoverPause: true,
  items: 1,
    responsive:{
        1024:{
            items:1
        }
    }
})
