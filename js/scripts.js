'use strict';

(function() {
  window.tenacitas = window.tenacitas || {};
}());

tenacitas.home = (function () {

  /**
   * Initialize home
   *
   * @function init
   * @memberof! tenacitas.home
   */
  function init() {

    if (jQuery('.js-carousel').length) { 
      var carouselImg = jQuery('.js-carousel-one').data('src'),
          carouselImg2 = jQuery('.js-carousel-two').data('src'),
          carouselImg3 = jQuery('.js-carousel-three').data('src'),
          imgArray = [carouselImg,carouselImg2,carouselImg3];
    }

    jQuery(window).load(function(){ 
      var speed = 10000;
      var run = setInterval(function(){ 
        rotate();
        changeBackground(); 
      }, speed);  

      jQuery('.js-next').click(function() {

        jQuery('.js-carousel-item.active').removeClass('active').next('.js-carousel-item').addClass('active');

        if (!jQuery('.js-carousel-item').hasClass('active')) {
          jQuery('.js-carousel-item:first-of-type').addClass('active');
        }

        changeBackground();

        return false;
      });

      jQuery('.js-previous').click(function() {

        jQuery('.js-carousel-item.active').removeClass('active').prev('.js-carousel-item').addClass('active');

        if (!jQuery('.js-carousel-item').hasClass('active')) {
          jQuery('.js-carousel-item:last-of-type').addClass('active');
        }

        changeBackground();

        return false;
      });

      jQuery('.hotspot').hover(
        function() {
          clearInterval(run);
        }, 
        function() {
          var speed = 10000;
          var run = setInterval(function(){ 
            rotate();
            changeBackground(); 
          }, speed);      
        }
      ); 
    });     
    // jQuery('.js-carousel').css({'background-image':'url(' + carouselImg2 + ')'});
  }

  function rotate() {
    jQuery('.js-next').click(); 
  }

  function changeBackground() {

    var latestUrl = jQuery('.js-carousel-item.active').data('src');

      jQuery('.js-carousel').css({'background-image':'url(' + latestUrl + ')'});

  }

  return {
    init: init 
  };

})();

tenacitas.menu = (function () {
	  /**
   * Initialize menu
   *
   * @function init
   * @memberof! tenacitas.menu
   */
  function init() {
  	jQuery('.js-menu').on('click', function(e){
  		e.preventDefault();
  		jQuery('body').toggleClass('nav--open');
		 	jQuery('.nav__list').slideToggle();
  	});

    var toggles = document.querySelectorAll('.cmn-toggle-switch');

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
      });
    }

  }

  return {
    init: init 
  };

})();

tenacitas.scroll = (function () {
	  /**
   * Initialize scroll
   *
   * @function init
   * @memberof! tenacitas.scroll
   */
  function init() {
		jQuery('a.js-ease').click(function(){
		    jQuery('html, body').animate({
		        scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top
		    }, 500);
		    return false;
		});
  }

  return {
    init: init 
  };

})();

tenacitas.news = (function () {

  /**
   * Initialize News section
   *
   * @function init
   * @memberof! tenacitas.news
   */
  function init() {

    jQuery( document ).ready(function() {
      if (jQuery('#js-news').length) { 

        hideNews();

        jQuery(window).load(function(){ 
          initMasnry(); 
        });        

        jQuery('.js-viewMore').on('click', function(e){
          e.preventDefault();
          viewMore();
          if (!jQuery('.news__item').hasClass('hidden')) {
            jQuery('.js-viewMore').hide();
          }
        });

        window.addEventListener('resize', function() {
          initMasnry();
        }, true);
      }
    });
  	
  }

  function hideNews() {
  	var windowWidth = jQuery(window).width();

  	if(windowWidth >= 748) { 
	  	if (jQuery('.news__item').length >= 8) {
	  		// jQuery('.news__item').slice(0, 8).removeClass('hidden');
	  		jQuery('.news__item').slice(8).addClass('hidden');

	  	}
	  } else {
	  	jQuery('.news__item').slice(2).addClass('hidden');

	  	jQuery('.news__item.hidden').slice(0,4).removeClass('hidden').addClass('visible');

	  	initMasnry();
	  }
  }

  function viewMore() {
  	var windowWidth = jQuery(window).width();

		if(windowWidth >= 748) { 
	  	jQuery('.news__item.hidden').slice(0,4).removeClass('hidden').addClass('visible');
	  	initMasnry();
		} else {
			jQuery('.news__item.hidden').slice(0,1).removeClass('hidden').addClass('visible');
			initMasnry();
		}
  }

  function initMasnry() {
  	// var container = document.querySelector('#js-news');
		jQuery('#js-news').isotope({
      layoutMode: 'masonry',
      itemSelector: '.news__item',
      sortBy : 'original-order'
    });
  }

  return {
    init: init 
  };

})();

tenacitas.team = (function () {

  /**
   * Initialize Team section
   *
   * @function init
   * @memberof! tenacitas.team
   */
  function init() { 

    if (jQuery('.team').length) { 

      wrapElements();        

      jQuery('.team__item').on('click', function(e){
        if (jQuery('.team__item.active').length){
          jQuery(this).removeClass('active');
          jQuery(this).next().removeClass('active').fadeOut();
        } else {
          jQuery(this).addClass('active');
          jQuery(this).next().addClass('active').fadeIn();
        }
        removeActive();
      }); 
    }
  }

  function wrapElements(){
    var windowWidth = jQuery(window).width();

    var divs = jQuery('.team__wrap');
    for(var i = 0; i < divs.length; i+=4) {
      divs.slice(i, i+4).wrapAll("<div class='team__row--mobile'></div>");
    }

    var divs = jQuery('.team__row--mobile');
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='team__row--desktop'></div>");
    }

  }

  function removeActive() {
    jQuery('.team__content .js-close').on('click', function(e){
      e.preventDefault();
      if(jQuery(this).parent().hasClass('active')) { 
        jQuery(this).parent().removeClass('active').fadeOut();
        jQuery(this).parent().prev().removeClass('active');
      }
    });  
  }

  return {
    init: init 
  };

})();

tenacitas.services = (function () {
    /**
   * Initialize services
   *
   * @function init
   * @memberof! tenacitas.services
   */
  function init() {
    if (jQuery('.services').length) { 
      jQuery( '.services__block:odd' ).addClass('services__block--right');
      jQuery( '.footer' ).addClass('footer--float');
    }
  }

  return {
    init: init 
  };

})();

tenacitas.newsPage = (function () {

  function init() {
    if (jQuery('.js-filter').length) { 

      jQuery(window).load(function(){ 
        initMasnry(); 
      });  

      jQuery('.filter').on('click', function(e){
        setTimeout(function(){ 
          currentHash();   
        }, 200);
      });

      jQuery('.js-archive').on('click', function(e){

        var urlTarget = '#read-more',
            target = jQuery(urlTarget);

        jQuery('html, body').stop().animate({
          'scrollTop': target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = urlTarget;
        });
        jQuery('.js-viewMore').parent().show();
      });
    }
  }

  function currentHash() {
    var container = jQuery('#js-news').isotope(),
        urlHash = location.hash;

    // get url hash and apply appropriate content filter

    switch (urlHash) {
      case '#all':
        jQuery('#js-news').isotope({filter: '*'});
        break;
      case '#news':
        jQuery('#js-news').isotope({filter: '.News'}); 
        jQuery('.js-viewMore').parent().hide();
        jQuery('.news__item').removeClass('visibile');
        break;
      case '#reports':
        jQuery('#js-news').isotope({filter: '.Reports'});
        jQuery('.js-viewMore').parent().hide();
        jQuery('.news__item').removeClass('visibile');
        break;
      case '#insight':
        jQuery('#js-news').isotope({filter: '.Insight'});
        jQuery('.js-viewMore').parent().hide();
        jQuery('.news__item').removeClass('visibile');
        break;
    }
  }

  function initMasnry() {
    // var container = document.querySelector('#js-news');
    jQuery('#js-news').isotope({
      itemSelector: '.news__item'
    });
  }

  return {
    init: init 
  };

})();

tenacitas.newsArticle = (function () {

  function init() {
    if (jQuery('.news-article').length) { 
      jQuery('#menu-item-86').addClass('current_page_item');
    }
  }

  return {
    init: init 
  };

})();

tenacitas.contact = (function () {

  function init() {

    if (jQuery('#js-map').length) { 
      var map;
      function initialize() {
        var myLatlng = new google.maps.LatLng(25.7606013, -80.1914913);
        var styles = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e9e5dc"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#e9e5dc"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#005d98"}]}];
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});

        var mapOptions = {
          zoom: 10,
          center: myLatlng,
          scrollwheel: false,
          panControl: false,
          zoomControl: true,
          scaleControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }
        };
        var iconBase = '/wp-content/themes/jfd/img/maps-marker.png';

        var marker = new google.maps.Marker({
          position: myLatlng,
          icon: iconBase
        });

        var map = new google.maps.Map(document.getElementById('js-map'),
          mapOptions);

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        marker.setMap(map);
      }

      google.maps.event.addDomListener(window, 'load', initialize);

      // jQuery('.map').css({opacity: 0});

      setTimeout(function(){ 
          jQuery('.map').removeClass('open');
      }, 300);

      jQuery('.js-map-open').click( function(e){
        e.preventDefault();
        var urlTarget = this.hash,
            target = jQuery(urlTarget);

        jQuery('.map').addClass('open');

        jQuery('html, body').stop().animate({
          'scrollTop': target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = urlTarget;
        });
      });

      jQuery('.js-map-close').click( function(e){
        jQuery('.map').removeClass('open');
      });
    }

  }

  return {
    init: init 
  };

})();

jQuery(function() {
  window.tenacitas.home.init();
  window.tenacitas.news.init();
  window.tenacitas.menu.init();
  window.tenacitas.scroll.init();
  window.tenacitas.team.init();
  window.tenacitas.services.init();
  window.tenacitas.newsPage.init();
  window.tenacitas.newsArticle.init();
  window.tenacitas.contact.init();
});

