function toggleMenu(){
    let menuBtn = document.querySelector("#toggleBtn");
    let menu = document.querySelector("#collapseNav");
    let header = document.querySelector(".header");
    let flagShowUK = document.querySelector("#m-flagUK");
    let flagShowGR = document.querySelector("#m-flagGR");

    if(menu.style.display === "none"){
        menu.style.display = "block";
        menu.classList.add("active-header");
        header.classList.add("active-header");
        flagShowUK.style.display = "block";
        flagShowGR.style.display = "block";
    }
    else{
        menu.style.display = "none"
        menu.classList.remove("active-header");
        header.classList.remove("active-header");
    }
}