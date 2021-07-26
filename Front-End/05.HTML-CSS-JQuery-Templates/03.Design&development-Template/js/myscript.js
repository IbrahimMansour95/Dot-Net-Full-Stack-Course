// adding and removing active class on link in navbar
$(".navbar-nav .nav-item").click(function(){
    $(this).addClass("active").siblings().removeClass("active");   
})
// according icons
$(".btn-link").click(function(){
    $(".card .fa-minus").not($("#"+$(this).parent().parent().attr("id")+" .fa-minus")).hide();
    $(".card .fa-plus").not($("#"+$(this).parent().parent().attr("id")+" .fa-plus")).show();
    $("#"+$(this).parent().parent().attr("id")+" .fa-plus").toggle();
    $( "#"+$(this).parent().parent().attr("id")+" .fa-minus").toggle();
})

// adding and remove class active when scrolling
$(window).scroll(function(){
    if($(this).scrollTop()>=$("#head").offset().top){
        $(".navbar-nav .nav-item:contains(Home) ").addClass("active").siblings().removeClass("active");   
    }
    if($(this).scrollTop()>=$("#about").offset().top){
        $(".navbar-nav .nav-item:contains(About) ").addClass("active").siblings().removeClass("active");   
    }
    if($(this).scrollTop()>=$("#ser").offset().top){
        $(".navbar-nav .nav-item:contains(Ser) ").addClass("active").siblings().removeClass("active");   
    }
    if($(this).scrollTop()>=$("#team").offset().top){
        $(".navbar-nav .nav-item:contains(Team) ").addClass("active").siblings().removeClass("active");   
    }
    if($(this).scrollTop()>=$("#cont").offset().top){
        $(".navbar-nav .nav-item:contains(Cont) ").addClass("active").siblings().removeClass("active");   
    }
    if($(this).scrollTop()>=$("#fag").offset().top){
        $(".navbar-nav .nav-item:contains(FAQ) ").addClass("active").siblings().removeClass("active");   
    }
})