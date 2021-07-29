// navbar fixed and add active class in scrolling
$(window).scroll(function(){
  if($(window).scrollTop()>$("header").innerHeight()*.75){
      // make navbar fixed
      $("nav").addClass("fixed-top");
      // show top button
      $("#top").fadeIn("slow");
  }else{
      // make navbar not fixed
      $("nav").removeClass("fixed-top");
      // hide top button
      $("#top").fadeOut("slow");
  }
  if($(window).scrollTop()<$("#about").offset().top){
      $(".navbar-nav .nav-link:contains(Home)").addClass("active").siblings().removeClass("active");
  }
  if($(window).scrollTop()>=$("#about").offset().top){
      $(".navbar-nav .nav-link:contains(About)").addClass("active").siblings().removeClass("active");
      
  }
  if($(window).scrollTop()>=$("#port").offset().top){
      $(".navbar-nav .nav-link:contains(Protfolio)").addClass("active").siblings().removeClass("active");
  }
  if($(window).scrollTop()>=$("#blog").offset().top){
      $(".navbar-nav .nav-link:contains(Blog)").addClass("active").siblings().removeClass("active");
  }
  if($(window).scrollTop()>=$("#cont").offset().top){
      $(".navbar-nav .nav-link:contains(Cont)").addClass("active").siblings().removeClass("active");
  }
})
// active class and scroll smoothly in navbar
$(".navbar-nav .nav-link").click(function(){
  $("html, body").animate({
      scrollTop: $(this.hash).offset().top
  },1000)
  $(this).addClass("active").siblings().removeClass("active");
})
// active class on shuffle gallary 
$(".port .btn-group button").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})

// shuffle
const filterizr = new Filterizr('.filter-container');

// slider
$('.slider').bxSlider({
    auto: true
});


// recounter
$(function(){
    $('.count').rCounter({
        duration: 20
    });
});
    

// colors
var colors = $(".settings .colors li");
$(function(){
    for (let index = 0; index < colors.length; index++) {
        const element = colors[index];
        $(element).css({
            backgroundColor:$(element).data("main-color")
        })
    }
});
$(colors).click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $(":root").css("--main-color", $(this).data("main-color"));
    $(":root").css("--sec-color", $(this).data("sec-color"));
})

// cog settings
$("#open-close").click(function(){
    $(".fa-cog").toggleClass("fa-spin");
    if($(".settings").css("right") != "-288px"){
        $(".settings").animate({
            right: "-288px"
        },"slow");
    }else{    
        $(".settings").animate({
            right: "0.5%"
        },"slow");
    }
})
// scroll up button
$("#top").click(function(){
    $("html, body").animate({
        scrollTop: "0"
    },1000)
})
// show tool tips
$("#get-temp").hover(function(){
    $(".tool-tip-donwload , .tool-tip-donwload::before").fadeIn("show");
},function(){
    $(".tool-tip-donwload , .tool-tip-donwload::before").fadeOut("show");
})
// show tool tips
$("#get-help").hover(function(){
    $(".tool-tip-help , .tool-tip-help::before").fadeIn("show");
},function(){
    $(".tool-tip-help , .tool-tip-help::before").fadeOut("show");
})

// nice select
$('select').niceSelect();
