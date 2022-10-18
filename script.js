const check = document.querySelector("#check");
const menusCont = document.querySelector(".menus-cont");
const topHamb = document.querySelector(".top-icon");
const btHamb = document.querySelector(".bt-icon");
const navIcon = document.querySelector(".nav-icon");
const navMenus = document.querySelectorAll(".nav-menus");
const yrSelect = document.querySelector("#year-select");
const yrMnOpt = document.querySelectorAll(".year-opt");
const ftSelect = document.querySelector("#footer-select");
const ftMnOpt = document.querySelectorAll(".footer-menu-opt");
const whoWe = document.querySelector(".who-we-are").offsetTop;
const rcWork = document.querySelector(".recent-work").offsetTop;
const byNumb = document.querySelector(".by-the-number").offsetTop;
const jobs = document.querySelector(".jobs").offsetTop;

check.addEventListener("change", () => {
    if (check.checked === false) {
        menusCont.classList.add("menus-hide");
        topHamb.classList.add("hamb-top-uncheck");
        btHamb.classList.add("hamb-bt-uncheck");
        topHamb.classList.remove("hamb-top-check");
        btHamb.classList.remove("hamb-bt-check");
        menusCont.classList.remove("menus-show");
        navIcon.classList.add("nav-icon-change-back");
        navIcon.classList.remove("nav-icon-change");
    } else {
        menusCont.classList.add("menus-show");
        topHamb.classList.add("hamb-top-check");
        btHamb.classList.add("hamb-bt-check");
        topHamb.classList.remove("hamb-top-uncheck");
        btHamb.classList.remove("hamb-bt-uncheck");
        menusCont.classList.remove("menus-hide");
        navIcon.classList.add("nav-icon-change");
        navIcon.classList.remove("nav-icon-change-back");
    }
});

yrMnOpt.forEach((e) => {
    let newOption = new Option(e.outerText, e.outerText);
    yrSelect.add(newOption, undefined);
});

ftMnOpt.forEach((e) => {
    let newOption = new Option(e.text, e.text);
    ftSelect.add(newOption, undefined);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > whoWe && window.scrollY < rcWork) {
        topHamb.classList.add("invert");
        btHamb.classList.add("invert");
        navIcon.classList.add("change-nav-icon");
        if (menusCont.classList[4] === "menus-hide") {
            navIcon.classList.remove("nav-icon-change");
            navIcon.classList.remove("nav-icon-change-back");
        }
    } else if (window.scrollY > rcWork && window.scrollY < byNumb) {
        topHamb.classList.remove("invert");
        btHamb.classList.remove("invert");
        navIcon.classList.remove("change-nav-icon");
        if (menusCont.classList[4] === "menus-hide") {
            navIcon.classList.remove("nav-icon-change");
            navIcon.classList.remove("nav-icon-change-back");
        }
    } else if (window.scrollY > byNumb && window.scrollY < jobs) {
        topHamb.classList.add("invert");
        btHamb.classList.add("invert");
        navIcon.classList.add("change-nav-icon");
        if (menusCont.classList[4] === "menus-hide") {
            navIcon.classList.remove("nav-icon-change");
            navIcon.classList.remove("nav-icon-change-back");
        }
    } else {
        topHamb.classList.remove("invert");
        btHamb.classList.remove("invert");
        navIcon.classList.remove("change-nav-icon");
        if (menusCont.classList[4] === "menus-hide") {
            navIcon.classList.remove("nav-icon-change");
            navIcon.classList.remove("nav-icon-change-back");
        }
    }
});
