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

  // Initialize menu functionality after a short delay to ensure DOM is ready
  setTimeout(initializeMenuFunctionality, 100);
});

function initializeMenuFunctionality() {
  // Safe element checking function
  function getElementSafely(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id '${id}' not found`);
    }
    return element;
  }

  // Mobile hamburger toggle
  const mobileHamburger = getElementSafely('mobileHamburger');
  const mobileNavMenu = getElementSafely('mobileNavMenu');
  
  // Tablet hamburger toggle
  const tabletHamburger = getElementSafely('tabletHamburger');
  const tabletNavMenu = getElementSafely('tabletNavMenu');
  
  // Create overlay for mobile menu if mobile elements exist
  if (mobileHamburger && mobileNavMenu) {
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileMenuOverlay);

    // Mobile Menu Functionality
    mobileHamburger.addEventListener('click', function() {
      mobileNavMenu.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      document.body.style.overflow = mobileNavMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function() {
      mobileNavMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileNavMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNavMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Create overlay for tablet menu if tablet elements exist
  if (tabletHamburger && tabletNavMenu) {
    const tabletMenuOverlay = document.createElement('div');
    tabletMenuOverlay.className = 'tablet-menu-overlay';
    document.body.appendChild(tabletMenuOverlay);

    // Tablet Menu Functionality
    tabletHamburger.addEventListener('click', function() {
      tabletNavMenu.classList.toggle('active');
      tabletMenuOverlay.classList.toggle('active');
      document.body.style.overflow = tabletNavMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close tablet menu when clicking overlay
    tabletMenuOverlay.addEventListener('click', function() {
      tabletNavMenu.classList.remove('active');
      tabletMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    // Close tablet menu when clicking a link
    const tabletMenuLinks = tabletNavMenu.querySelectorAll('a');
    tabletMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        tabletNavMenu.classList.remove('active');
        tabletMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}