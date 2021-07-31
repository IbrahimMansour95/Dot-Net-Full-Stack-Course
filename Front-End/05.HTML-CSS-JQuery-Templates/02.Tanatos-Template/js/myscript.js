$(document).ready(function(){
	// scroll to services
	$(".la-angle-down").click(function(){
		$("html,body").animate({
			scrollTop:$("#ser").offset().top
		},"slow");
	})

	// scroll to our team
	$("header  button:first-child").click(function(){
		$("html,body").animate({
			scrollTop:$("#team").offset().top
		},"slow");
	})
	// scroll to our team
	$("header  button:last-child").click(function(){
		$("html,body").animate({
			scrollTop:$(".work").offset().top
		},"slow");
	})

	$(".work .show-hide").click(function(){
		$(".work .hide").slideToggle("slow");
		if($(this).text()==="Show Less"){
			$(this).text("Show More");
		}else{
			$(this).text("Show Less");
		}
	})

	let $next = $(".la-angle-right"); 
	let $prev = $(".la-angle-left"); 
	let $testBox = $(".test .test-box ");

	$next.click(function(){
		if($(".test .test-box:first").hasClass("show")){
			$prev.show();
		}
		for (let index = 0; index < $testBox.length; index++) {
			if($testBox.eq(index).hasClass("show")){
				$testBox.eq(index).next().fadeIn("slow").addClass("show")
				.siblings().not($(this)).hide(0).removeClass("show");
				$prev.show(0);
				if($(".test .test-box:last").hasClass("show")){
					$next.hide(0);
				}
				break;
			}
		}
	})

	$prev.click(function(){
		for (let index = 0; index < $testBox.length; index++) {
			if($testBox.eq(index).hasClass("show")){
				$testBox.eq(index).prev().fadeIn("slow").addClass("show")
				.siblings().not($(this)).hide(0).removeClass("show");
				$next.show(0);
				if($(".test .test-box:first").hasClass("show")){
					$prev.hide(0);
				}
				break;
			}
		}
	})

	// image team animation width
	$(".team .team-box img").hover(function(){
	   $(this).animate({
		   width: "100%"
	   },100)
	},function(){
		$(this).animate({
			width: "90%",
		},100)
	})
});