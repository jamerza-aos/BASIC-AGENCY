// function normalImg(index) {
//     index.style.height = "50vh";
// }
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


let hover1 = document.getElementById("hover1")
let img1 = document.getElementById("WEBBYIMG")
hover1.addEventListener("mouseover", show1)
hover1.addEventListener("mouseout", hide1)

let hover2 = document.getElementById("hover2")
let img2 = document.getElementById("ADWEEKIMG")
hover2.addEventListener("mouseover", show2)
hover2.addEventListener("mouseout", hide2)

let hover3 = document.getElementById("hover3")
let img3 = document.getElementById("AWWWARDSIMG")
hover3.addEventListener("mouseover", show3)
hover3.addEventListener("mouseout", hide3)

let hover4 = document.getElementById("hover4")
let img4 = document.getElementById("D&ADIMG")
hover4.addEventListener("mouseover", show4)
hover4.addEventListener("mouseout", hide4)

let hover5 = document.getElementById("hover5")
let img5 = document.getElementById("ONEIMG")
hover5.addEventListener("mouseover", show5)
hover5.addEventListener("mouseout", hide5)

let hover6 = document.getElementById("hover6")
let img6 = document.getElementById("THEIMG")
hover6.addEventListener("mouseover", show6)
hover6.addEventListener("mouseout", hide6)

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