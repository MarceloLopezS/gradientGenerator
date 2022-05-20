const body = document.querySelector("body");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const randomizer = document.getElementById("randomizer");
const currentCSS = document.getElementById("currentCSS");
const copyToClipboard = document.getElementById("copyToClipboard");
const tooltip = document.querySelectorAll(".tooltip, .tooltiptext");
const formatToggler = document.getElementById("toggleFormat");
let rgbFormat = true;

const copyGradientToClipboard = () => {
    const formatedGradient = document.getElementById("currentCSS");
    navigator.clipboard.writeText(formatedGradient.textContent);
    const cicleTooltip = () => {
        for (item of tooltip) {
            item.style.visibility = "visible";
            item.style.opacity = "1";
        }
        setTimeout(() => {
            tooltip[1].style.visibility = "hidden";
            tooltip[1].style.opacity = "0";
        },2000);
    }
    cicleTooltip();
}
const rgbToHex = (r, g, b) => "#" + 
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
const setBodyBackground = (color1, color2) => {
    body.style.background = "linear-gradient(to right bottom, "+ 
    color1 +", "+ color2 +")";
    currentCSS.textContent = body.style.background + ";";
}
const setGradient = () => setBodyBackground(color1.value, color2.value);
const randomizeColor = () => {
    let color = rgbToHex(Math.floor(Math.random()*255), 
    Math.floor(Math.random()*255), 
    Math.floor(Math.random()*255));
    return color;
}
const randomizeGradient = () => {
    color1.value = randomizeColor();
    color2.value = randomizeColor();
    rgbFormat = false;
    toggleFormat();
    setGradient();
}
const toggleFormat = () => {
    if(rgbFormat) {
        currentCSS.textContent = "linear-gradient(to right bottom, "+ 
        color1.value +", "+ color2.value +");";
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
copyToClipboard.addEventListener("click", copyGradientToClipboard);
formatToggler.addEventListener("click", toggleFormat);