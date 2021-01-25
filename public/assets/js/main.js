function F1(img) {
    img.style.zIndex = "5";
    img.style.position = "absolute";
}
function Z1(img) {
    img.style.zIndex = "3";
    img.style.position = "absolute";
}
function F2(img) {
    img.style.zIndex = "5";
    img.style.position = "absolute";
}
function Z2(img) {
    img.style.zIndex = "3";
    img.style.position = "absolute";
}
function F3(img) {
    img.style.zIndex = "6";
    img.style.position = "absolute";
}
function Z3(img)  {
    img.style.zIndex = "2";
    img.style.position = "absolute";
}
function F4(img) {
    img.style.zIndex = 5;
    img.style.position = "absolute";
}
function Z4(img) {
    img.style.zIndex = 1;
    img.style.position = "absolute";
}

const burger = document.getElementById("hamburger")
const closeBurger = document.getElementById("close")
const hamburger = document.getElementById("overlay")

burger.addEventListener("click", () => {
    hamburger.style.right = "0%"
})
closeBurger.addEventListener("click", () => {
    hamburger.style.right = "-100%"
})
