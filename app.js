const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const outerMenu = document.querySelector('.menu-backdrop');

menuOpen.addEventListener("click", function(){
    document.body.classList.add("navbar-open");
});

menuClose.addEventListener("click", function(){
    console.log("aaaa")
    document.body.classList.remove("navbar-open");
});

outerMenu.addEventListener("click", function(){
    document.body.classList.remove("navbar-open");
});