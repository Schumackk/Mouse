//бургер
let innerSubMenu = document.getElementsByClassName("submenu1")[0]
let outerSubMenu = document.getElementsByClassName("submenu3")[0]
let gamesSubMenu = document.getElementsByClassName("submenu2")[0]
let innerButton = document.getElementsByClassName("inner")[0]
let outerButton = document.getElementsByClassName("outer")[0]
let gamesButton = document.getElementsByClassName("games")[0]
closeInnerSubMenu()
closeOuterSubMenu()
closeGamesSubMenu()
function openInnerSubMenu() {
    innerSubMenu.style.visibility = "visible"
    innerSubMenu.style.opacity = "1"
    innerSubMenu.style.height = "50px"
    closeOuterSubMenu()
    closeGamesSubMenu()
}
function openOuterSubMenu() {
    outerSubMenu.style.visibility = "visible"
    outerSubMenu.style.opacity = "1"
    outerSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeGamesSubMenu()
}
function openGamesSubMenu() {
    gamesSubMenu.style.visibility = "visible"
    gamesSubMenu.style.opacity = "1"
    gamesSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeOuterSubMenu()
}
function closeInnerSubMenu() {
    innerSubMenu.style.height = "0px"
    innerSubMenu.style.opacity = "0"
    innerSubMenu.style.visibility = "hidden"
}
function closeOuterSubMenu() {
    outerSubMenu.style.height = "0px"
    outerSubMenu.style.opacity = "0"
    outerSubMenu.style.visibility = "hidden"
}
function closeGamesSubMenu() {
    gamesSubMenu.style.height = "0px"
    gamesSubMenu.style.opacity = "0"
    gamesSubMenu.style.visibility = "hidden"
}
//свайпер
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
  
// менюшки
let menu1=document.getElementsByClassName("menu1")[0]
let menu2=document.getElementsByClassName("menu2")[0]
let menu3=document.getElementsByClassName("menu3")[0]

let description=document.getElementsByClassName("block2_description")
let characteristics=document.getElementsByClassName("block2_chatacteristics")
let models=document.getElementsByClassName("models")

function menu1_zoom(){
    menu1.style.display = "flex"
    menu1.style.height="100%"
    menu2.style.display="none"
    menu3.style.display="none"
}

function menu2_zoom(){
    menu2.style.display = "flex"
    menu2.style.height="100%"
    menu1.style.display="none"
    menu3.style.display="none"
}

function menu3_zoom(){
    menu3.style.display = "flex"
    menu3.style.height="100%"
    menu1.style.display="none"
    menu2.style.display="none"
}


var array = document.querySelectorAll(".block2_text p");
toggleClass = function () {
     for (var j = 0; j < array.length; j++) {
         array[j].classList.remove('h1');
         this.classList.add('h1');
         }
};
 
for (var j = 0; j < array.length; j++) {
     array[j].addEventListener('click', toggleClass);
}