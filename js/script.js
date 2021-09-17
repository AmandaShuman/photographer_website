// for mobile navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

// to close the navbar upon clicking a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

// This is for the picture popups in the Photos page
$(function () {
    $("img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show").attr("src", $src);
    });

    // click on the x to close out the picture 
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
});