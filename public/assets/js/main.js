function normalImg(index) {
    index.style.height = "50vh";
}
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


let head1 = document.getElementById("head1")
let img1 = document.getElementById("WEBBYIMG")
head1.addEventListener("mouseover", show1)
head1.addEventListener("mouseout", hide1)

let head2 = document.getElementById("head2")
let img2 = document.getElementById("ADWEEKIMG")
head2.addEventListener("mouseover", show2)
head2.addEventListener("mouseout", hide2)

let head3 = document.getElementById("head3")
let img3 = document.getElementById("AWWWARDSIMG")
head3.addEventListener("mouseover", show3)
head3.addEventListener("mouseout", hide3)

let head4 = document.getElementById("head4")
let img4 = document.getElementById("D&ADIMG")
head4.addEventListener("mouseover", show4)
head4.addEventListener("mouseout", hide4)

let head5 = document.getElementById("head5")
let img5 = document.getElementById("ONEIMG")
head5.addEventListener("mouseover", show5)
head5.addEventListener("mouseout", hide5)

let head6 = document.getElementById("head6")
let img6 = document.getElementById("THEIMG")
head6.addEventListener("mouseover", show6)
head6.addEventListener("mouseout", hide6)

function show1() {
    img1.style.display = "block",
    head1.style.color= "#f9cdcd96"
}

function hide1() {
    img1.style.display = "none"
}

function show2() {    
    img2.style.display = "block"
    head2.style.color= "#f9cdcd96"
}

function hide2() {   
    img2.style.display = "none"
}

function show3() {    
    img3.style.display = "block"
    head3.style.color= "#f9cdcd96"
}

function hide3() {   
    img3.style.display = "none"
}

function show4() {    
    img4.style.display = "block"
    head4.style.color= "#f9cdcd96"
}

function hide4() {   
    img4.style.display = "none"
}

function show5() {
    img5.style.display = "block"
    head5.style.color= "#f9cdcd96"
}

function hide5() {   
    img5.style.display = "none"
}

function show6() {
    img6.style.display = "block"
    head6.style.color= "#f9cdcd96"
}

function hide6() {   
    img6.style.display = "none"
}