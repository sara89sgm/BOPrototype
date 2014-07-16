$(document).ready(function() {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');

	adjustWindow();
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
			forceHeight: false, 
			render: function(data) {

		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }

		});
		
		// Get window size
		winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= 550) {
	    	winH = 550;
	    } 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*3);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));

	    var nav_container = $(".header-container");
	    var nav = $("#nav");

	    var top_spacing = 0;
	    var waypoint_offset =0;

	// nav_container.waypoint({
	// 	handler: function(event, direction) {

	// 		if (direction == 'down') {

	// 			nav_container.css({ 'height':nav.outerHeight(), 'position':'', 'bottom':''  });
	// 			nav_container.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});

	// 		} else {
	// 			nav_container.css({ 'top':'', 'height':'' });
	// 			nav_container.stop().removeClass("sticky").css({'position':'absolute', "bottom":nav.outerHeight()+waypoint_offset}).animate({"bottom":"20"});
	// 			var active_link = $('nav a[href="#home"]');
	// active_link.addClass("selected");
	// 		}

	// 	},
	// 	offset: function() {
	// 		return -nav.outerHeight()-waypoint_offset;
	// 	}
	// });

var sections = $("section");
var navigation_links = $("#nav ul li a");

sections.waypoint({
	handler: function(event, direction) {
		
		var active_section;
		active_section = $(this);
		console.log(active_section.attr("id"));
		if (direction === "up") active_section = active_section.prev();

		var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
		navigation_links.removeClass("selected");
		active_link.addClass("selected");

	}
});

var active_link = $('nav a[href="#home"]');
active_link.addClass("selected");


//The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,

    //The easing function to use.
    easing: 'sqrt',

    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 2,

    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        return 900;

        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        //return Math.abs(currentTop - targetTop) * 10;
    }


});
}

$("#owl-example").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 400,
      pagination : false,
      singleItem:true,
      navigationText: ["<",">"],
      responsive: true
     });
 
 
  });