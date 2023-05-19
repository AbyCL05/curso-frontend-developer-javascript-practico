const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu () {
    menuDesktop.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains(".inactive")
    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    menuMobile.classList.toggle("inactive")
}

function toggleCarAside () {
    const isMobileMenuClosed = menuMobile.classList.contains("inactive")
    if (!isMobileMenuClosed) {
        menuMobile.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}