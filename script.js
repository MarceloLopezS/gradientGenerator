const body = document.querySelector("body");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const randomizer = document.getElementById("randomizer");
const currentCSS = document.getElementById("currentCSS");
const formatToggler = document.getElementById("toggleFormat");
let rgbFormat = true;

function rgbToHex(r, g, b) {
    return "#" + 
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function setBodyBackground(color1, color2) {
    body.style.background = "linear-gradient(to right bottom, "+ 
    color1 +", "+ color2 +")";
    currentCSS.textContent = body.style.background + ";";
}
function setGradient() {
    setBodyBackground(color1.value, color2.value);
}
function randomizeColor() {
    let color = rgbToHex(Math.floor(Math.random()*255), 
    Math.floor(Math.random()*255), 
    Math.floor(Math.random()*255));
    return color;
}
function randomizeGradient() {
    color1.value = randomizeColor();
    color2.value = randomizeColor();
    setGradient();
}
function toggleFormat() {
    if(rgbFormat) {
        currentCSS.textContent = "linear-gradient(to right bottom, "+ 
        color1.value +", "+ color2.value +")";
        formatToggler.textContent = "RGB";
        rgbFormat = false;
    }else {
        currentCSS.textContent = body.style.background + ";";
        formatToggler.textContent = "Hex";
        rgbFormat = true;
    }
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomizer.addEventListener("click", randomizeGradient);
formatToggler.addEventListener("click", toggleFormat);