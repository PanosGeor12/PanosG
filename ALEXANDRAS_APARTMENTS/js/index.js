window.onscroll = function(){
    let currentScroll = window.scrollY;
    let showHeader = document.querySelector(".header");
    let showLogo = document.querySelector("#logo");
    let showLogoLink = document.querySelector("#logoLink");
        
    if (currentScroll > 200){
        showHeader.style.position = "fixed";
        showHeader.classList.add("show-header");
        showLogo.classList.add("show-logo");
        showLogoLink.classList.add("show-logo");
    }else{
        
        showHeader.style.position = "absolute";
        showHeader.classList.remove("show-header");
        showLogo.classList.remove("show-logo");
        showLogoLink.classList.remove("show-logo");
    }
}
