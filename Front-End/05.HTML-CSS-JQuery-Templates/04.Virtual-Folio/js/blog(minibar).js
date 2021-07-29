$(window).scroll(function(){
    if($(window).scrollTop()>$(this).height()/2){
        // show top button
        $("#top").fadeIn("slow");
    }else{

        // hide top button
        $("#top").fadeOut("slow");
    }
})
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

// Back to index 2
$(".mini-bar .icon-item").click(function(){
    window.location="index2.html";
})
