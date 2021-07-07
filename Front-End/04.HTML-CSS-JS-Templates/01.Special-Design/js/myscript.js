
// Random Backgrond Images
if(localStorage.getItem("random-bg")===null){
    // set item as random as default
    localStorage.setItem("random-bg","random");
    // add active class on yes as default
    document.getElementById("btn-yes").classList.add("active");
}
localStorage.removeItem("bg-number");
// function to random background
function randomBackground(){
    // images
    var imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
    // counter
    var i = 0;
    document.getElementById("landing-page").style.backgroundImage="url('../imgs/"+imgs[i]+"')";
    setInterval(
        function(){
            // check in local storage
            if(localStorage.getItem("random-bg") == "random"){
                if(i==5){
                    i=0;
                }
                document.getElementById("landing-page").style.backgroundImage="url('../imgs/"+imgs[i]+"')";
                i++;
            }else{
                clearInterval(this);
                document.getElementById("btn-yes").classList.remove("active");
                document.getElementById("btn-no").classList.add("active");
            }
        }
    ,1000);
}
randomBackground();
// Setting Toggle
function showSettingBox(){
    document.getElementById("gearClick").classList.toggle("fa-spin");
    document.getElementById("settingBox").classList.toggle("open");
}

// Switch Colors
var colorLis = document.querySelectorAll(".color-list li");

// loop on all lis
for(var i = 0 ; i<colorLis.length;i++){

    colorLis[i].addEventListener("click",function(){
        // Removing active class from all li
        for(var j = 0 ; j<colorLis.length ; j++){
            colorLis[j].classList.remove("active");
        }
        // change main color
        document.documentElement.style.setProperty("--main-color",this.getAttribute("data-color".toString()));
        // store it in local storage
        localStorage.setItem("color-value",this.getAttribute("data-color"));
        this.classList.add("active");
    });
}

// check of there is color stored in local storage or not
if(localStorage.getItem("color-value") !== null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-value"));
    // reomve all active classes
    for(var j = 0 ; j<colorLis.length ; j++){
        colorLis[j].classList.remove("active");
        if(localStorage.getItem("color-value")==colorLis[j].getAttribute("data-color")){
            colorLis[j].classList.add("active");
        }
    }
}

// random background btn
var btnYes = document.getElementById("btn-yes");
var btnNo = document.getElementById("btn-no");

btnYes.onclick = function(){
    this.classList.add("active");
    btnNo.classList.remove("active");
    localStorage.setItem("random-bg","random");
    randomBackground();
}
btnNo.onclick = function(){
    this.classList.add("active");
    btnYes.classList.remove("active");
    localStorage.setItem("random-bg","not-random");
    randomBackground();
}

// Scrolling animation for Skills

let skills = document.querySelector(".skill");

// console.log(skills);

window.onscroll = function(){

    // Skill Offset Top
    let skillOffsetTop = skills.offsetTop;
    // console.log(skillOffsetTop);

    // Skill Offset Heigh
    let skillOffsetHeigh = skills.offsetHeight;
    // console.log(skillOffsetHeigh);

    // Window Inner Heigh
    let windowInner = this.innerHeight;
    // console.log(windowInner);
    // console.log(( skillOffsetTop + skillOffsetHeigh - windowInner ));
    // console.log(this.pageYOffset);

    if(this.pageYOffset > ( skillOffsetTop + skillOffsetHeigh - windowInner ) ){
        let skillsBar = document.querySelectorAll(".skill-progress-bar");
        for (let index = 0; index < skillsBar.length; index++) {
            skillsBar[index].style.width = skillsBar[index].getAttribute("data-width");
            
        }
    }

};

// Popup Gallary Gallary

let images = document.querySelectorAll(".image-box img");
// loop on each image

for (let index = 0; index < images.length; index++) {
    let img = images[index];
    // click on each image
    img.addEventListener("click",function(){
        // create div for overlay on body
        let overlay = document.createElement("div");
        // add class overlay on this div
        overlay.className = "popup-overlay";
        // add overlay div into body
        document.body.appendChild(overlay);
        // create popup image box
        let imageBox = document.createElement("div");
        // add popupImage class to image box
        imageBox.className="popup-image-box";
        // Add image to body
        document.body.appendChild(imageBox);
        // create h2 for image alt
        let imageAlt = document.createElement("h2");
        // text on h2 from image alt
        let imageTitle  = document.createTextNode(img.alt);
        // append image title on h2
        imageAlt.appendChild(imageTitle);
        // appen image alt to image box
        imageBox.appendChild(imageAlt);
        // create image 
        let popupImage = document.createElement("img");
        // add source to image from image clicked
        popupImage.src = img.src;
        // append image on imagebox
        imageBox.appendChild(popupImage);
        // create close button
        let closeBTN = document.createElement("span");
        // text on span
        let spanTxt = document.createTextNode("X");
        // add txt node to span
        closeBTN.appendChild(spanTxt);
        // add class on close btn
        closeBTN.className = ("close-btn");
        // add close btn to image box
        imageBox.appendChild(closeBTN);
    });
}
// close button functionality
document.addEventListener("click",function(e){
    if(e.target.className == "close-btn"){
        // remove image box
        e.target.parentNode.remove();
        // remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});