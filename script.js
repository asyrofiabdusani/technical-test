const check = document.querySelector("#check");
const menusCont = document.querySelector(".menus-cont");
const topHamb = document.querySelector(".top-icon");
const btHamb = document.querySelector(".bt-icon");

check.addEventListener("change", () => {
    if (check.checked === false) {
        menusCont.classList.add("menus-hide");
        topHamb.classList.add("hamb-top-uncheck");
        btHamb.classList.add("hamb-bt-uncheck");
        topHamb.classList.remove("hamb-top-check");
        btHamb.classList.remove("hamb-bt-check");
        menusCont.classList.remove("menus-show");
    } else {
        menusCont.classList.add("menus-show");
        topHamb.classList.add("hamb-top-check");
        btHamb.classList.add("hamb-bt-check");
        topHamb.classList.remove("hamb-top-uncheck");
        btHamb.classList.remove("hamb-bt-uncheck");
        menusCont.classList.remove("menus-hide");
    }
});
