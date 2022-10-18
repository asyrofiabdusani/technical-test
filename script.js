const check = document.querySelector("#check");
const menusCont = document.querySelector(".menus-cont");
const topHamb = document.querySelector(".top-icon");
const btHamb = document.querySelector(".bt-icon");
const navLogo = document.querySelector(".nav-icon");
const navMenus = document.querySelectorAll(".nav-menus");
const yrSelect = document.querySelector("#year-select");
const yrMnOpt = document.querySelectorAll(".year-opt");
const ftSelect = document.querySelector("#footer-select");
const ftMnOpt = document.querySelectorAll(".footer-menu-opt");

check.addEventListener("change", () => {
    if (check.checked === false) {
        menusCont.classList.add("menus-hide");
        topHamb.classList.add("hamb-top-uncheck");
        btHamb.classList.add("hamb-bt-uncheck");
        topHamb.classList.remove("hamb-top-check");
        btHamb.classList.remove("hamb-bt-check");
        menusCont.classList.remove("menus-show");
        navLogo.classList.add("nav-icon-change-back");
        navLogo.classList.remove("nav-icon-change");
    } else {
        menusCont.classList.add("menus-show");
        topHamb.classList.add("hamb-top-check");
        btHamb.classList.add("hamb-bt-check");
        topHamb.classList.remove("hamb-top-uncheck");
        btHamb.classList.remove("hamb-bt-uncheck");
        menusCont.classList.remove("menus-hide");
        navLogo.classList.add("nav-icon-change");
        navLogo.classList.remove("nav-icon-change-back");
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
