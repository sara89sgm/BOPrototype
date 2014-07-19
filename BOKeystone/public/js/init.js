$(document).ready(function() {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');


	adjustWindow();
	
	function adjustWindow(){
		
			// Init Skrollr
			var s = skrollr.init({
				forceHeight: false, 
				render: function(data) {
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

		    var nav_container = $(".header-container"),
		    nav = $("#nav"),
		    top_spacing = 0,
		    waypoint_offset =0,
		    sections = $("section"),
		    navigation_links = $("#nav ul li a");

		    sections.waypoint({
		    	handler: function(event, direction) {

		    		var active_section;
		    		active_section = $(this);
		    		if (direction === "up") active_section = active_section.prev();
		    		var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
		    		navigation_links.removeClass("selected");
		    		active_link.addClass("selected");

		    	}
		    });

		    var active_link = $('nav a[href="#home"]');
		    active_link.addClass("selected");
		    
		    skrollr.menu.init(s, {
		    	animate: true,
		    	easing: 'sqrt',
		    	scale: 2,
		    	duration: function(currentTop, targetTop) {
		    		return 900;
		    	}
		    });
		}

	$('#menu').slicknav({
		label:'',
		closeOnClick : true
	});
	$("#owl-bo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 400,
		pagination : false,
		singleItem:true,
		navigationText: ["<",">"],
		responsive: true
	});


	});