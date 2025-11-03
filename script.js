// script.js

$(document).ready(function() {
  // Collapse functionality for promotions/events
  $('.collapse').on('show.bs.collapse', function() {
    $(this).prev('.expand-header').find('i')
      .removeClass('fa-angle-right')
      .addClass('fa-angle-down')
      .css('transform', 'rotate(0deg)');
  });

  $('.collapse').on('hide.bs.collapse', function() {
    $(this).prev('.expand-header').find('i')
      .removeClass('fa-angle-down')
      .addClass('fa-angle-right')
      .css('transform', 'rotate(0deg)');
  });

  // Enable swipe gestures for carousel (Bootstrap 3)
  $("#featuredCarousel").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
      var xMove = event.originalEvent.touches[0].pageX;
      if( Math.floor(xClick - xMove) > 5 ){
        $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -5 ){
        $(this).carousel('prev');
      }
    });
    $(this).on("touchend", function(){
      $(this).off("touchmove");
    });
  });
});