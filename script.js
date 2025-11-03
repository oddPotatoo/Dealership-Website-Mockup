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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburgerToggle = document.querySelector('.hamburger-toggle');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const mobileMenuOverlay = document.createElement('div');
  mobileMenuOverlay.className = 'mobile-menu-overlay';
  document.body.appendChild(mobileMenuOverlay);
  
  // Mobile search toggle
  const searchToggle = document.querySelector('.search-toggle');
  const mobileSearchBar = document.querySelector('.mobile-search-bar');
  
  // Toggle mobile menu
  if (hamburgerToggle) {
    hamburgerToggle.addEventListener('click', function() {
      mobileNavMenu.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileNavMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close mobile menu when clicking overlay
  mobileMenuOverlay.addEventListener('click', function() {
    mobileNavMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Toggle mobile search
  if (searchToggle) {
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileSearchBar.classList.toggle('active');
    });
  }
  
  // Existing functionality
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