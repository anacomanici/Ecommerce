//Slider Sub-Header
$(document).ready(function(){

	$('.slides').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
	arrows:false,
	variableWidth: true,
  	autoplaySpeed: 2000,
		responsive: [
		{
      	breakpoint: 1200,
      	settings: {
        slidesToShow: 5
	  	}
    	},
    	{
      	breakpoint: 1000,
      	settings: {
        slidesToShow: 4
	  	}
    	},
		{
      	breakpoint: 780,
      	settings: {
        slidesToShow: 3
	  	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        slidesToShow: 2
      	}
    	}
  		]
		});	

		
});


//Slider Hero
$(document).ready(function(){

	$('.hero').slick({
  	dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear',
	arrows: true,
	nextArrow: '<button class="hero-bttn right "><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="hero-bttn left "><i class="fas fa-chevron-left"></i></button>',
		
	});
	
});



//Slider Explore-More
$(document).ready(function(){

	$('.explore-slides').slick({
	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: false,
  	infinite: true,
  	speed: 500,
  	fade: false,
  	cssEase: 'linear',
	arrows: true,
	nextArrow: '<button class="hero-bttn right "><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="hero-bttn left "><i class="fas fa-chevron-left"></i></button>',
	responsive: [
    	{
      	breakpoint: 1000,
      	settings: {
        slidesToShow: 2
	  	}
    	},
		{
      	breakpoint: 780,
      	settings: {
        slidesToShow: 2
	  	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        slidesToShow: 1
      	}
    	}
  		]
		
	});
	
});




//Slider Categories
$(document).ready(function(){

	$('.categories-slider').slick({
  	slidesToShow: 5,
  	slidesToScroll: 2,
  	autoplay: false,
	arrows:false,
	variableWidth: true,
	swipeToSlide: true
		});	

});




//Slider You Could like
$(document).ready(function(){

	$('.you-could-like-slides').slick({
	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: false,
  	infinite: true,
  	speed: 500,
  	fade: false,
  	cssEase: 'linear',
	arrows: true,
	nextArrow: '<button class="hero-bttn right "><i class="fas fa-chevron-right"></i></button>',
    prevArrow: '<button class="hero-bttn left "><i class="fas fa-chevron-left"></i></button>',
	responsive: [
    	{
      	breakpoint: 1000,
      	settings: {
        slidesToShow: 2
	  	}
    	},
		{
      	breakpoint: 780,
      	settings: {
        slidesToShow: 2
	  	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        slidesToShow: 1
      	}
    	}
  		]
		
	});
	
});