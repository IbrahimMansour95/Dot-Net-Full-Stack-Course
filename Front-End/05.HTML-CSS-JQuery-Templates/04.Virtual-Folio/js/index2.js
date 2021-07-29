// show top button
$(window).scroll(function(){
    if($(window).scrollTop()>$("header").innerHeight()*.75){
        // show top button
        $("#top").fadeIn("slow");
    }else{
        // hide top button
        $("#top").fadeOut("slow");
    }
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
  

//side bar
$(".mini-bar .icon-item").click(function(){
    $("html, body").animate({
        scrollTop: $($(this).data("section")).offset().top
    },1000)
    $(this).addClass("active").siblings().removeClass("active");
})

// go to blog(minibar)
$(".blog > button").click(function(){
    window.location="blog(minibar).html";
})
// change active class on minibar when scrolling window
$(window).scroll(function(){
    if($(this).scrollTop() >=$("#head").offset().top){
        $(".mini-bar .icon-item:contains(Home)").addClass("active").siblings().removeClass("active");
    }
    if($(this).scrollTop() >=$("#about").offset().top){
        $(".mini-bar .icon-item:contains(About)").addClass("active").siblings().removeClass("active");
    }
    if($(this).scrollTop() >=$(".ser").offset().top){
        $(".mini-bar .icon-item:contains(Services)").addClass("active").siblings().removeClass("active");
    }
    if($(this).scrollTop() >=$("#port").offset().top){
        $(".mini-bar .icon-item:contains(Protfolio)").addClass("active").siblings().removeClass("active");
    }
    if($(this).scrollTop() >=$("#blog").offset().top){
        $(".mini-bar .icon-item:contains(Blog)").addClass("active").siblings().removeClass("active");
    }
    if($(this).scrollTop() >=$("#cont").offset().top){
        $(".mini-bar .icon-item:contains(Contact)").addClass("active").siblings().removeClass("active");
    }
})