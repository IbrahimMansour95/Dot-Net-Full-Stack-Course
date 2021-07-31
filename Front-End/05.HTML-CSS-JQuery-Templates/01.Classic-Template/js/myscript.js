$(document).ready(function(){
	// active clasee on hover and click
	$(".navbar .links li a,.navbar .list-nav li a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	})

	// slider plugin
	$(document).ready(function(){
		$('.slider').bxSlider();
	});

	// smooth scroll
	$(".navbar .links li a,.navbar .list-nav li a").click(function(){
		$("html, body").animate({
			scrollTop: $("#"+$(this).data("value")).offset().top
		},"slow")
		console.log($(this).data("value"));
	})

	// myslider
	$(function autoSlide(){
		var $myslider = $(".testimonial .content.active");
		$myslider.each(function(){
			if(!$(this).is(":last-child")){
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoSlide();
				});
			}else{
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active");
					$(".testimonial .content").eq(0).addClass("active").fadeIn();
					autoSlide();
				});
			}
		})
	})

	// shuffle images
	$(".projects .categories li").click(function(){
		var containerEl = document.querySelector('.gallary');
		var mixer = mixitup(containerEl);
		$(this).addClass("active").siblings().removeClass("active");
	})

	var containerEl = document.querySelector('.gallary');
	var mixer = mixitup(containerEl);
	$(this).addClass("active").siblings().removeClass("active");

	// navbtn
	$(".btNnavbar").click(function(){
		$(".list-nav").slideToggle("slow")
		$(".navbar .btNnavbar").toggleClass("show-hide-after",0)
	})

	// resizing 
	$(window).resize(function(){
		if($(window).width()>=990){
			$(".list-nav").hide(0);
			$(".navbar .btNnavbar").removeClass("show-hide-after");
		}
	})

	// nice scroll
	$("html").niceScroll({
		cursorcolor: "#1abc9c9e",
		cursorwidth:"10px",
	});
});