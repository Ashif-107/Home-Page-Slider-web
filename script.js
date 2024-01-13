var navMenu = document.querySelector('.side-nav')

function shownavbar(){
    navMenu.style.left="0"
}
function closenavbar(){
    navMenu.style.left="-100%"
}



/*========slider=========== */

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slider");
const contents = document.querySelectorAll(".home-content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });
    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click",() => {
        sliderNav(i);
    });
});