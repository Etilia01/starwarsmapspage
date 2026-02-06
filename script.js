const Planet1 = "O:6";
const Planet1alt = "o:6";
const Planet2 = "S:3";
const Planet2alt = "s:3";

function checkmaps(){
    const planetinput = document.getElementById("planetinput").value;
    if (planetinput== Planet1){
        window.location.href = "dathomir.html"
    }
    if (planetinput== Planet1alt){
        window.location.href = "dathomir.html"
    }
    if (planetinput== Planet2){
        window.location.href = "bonadan.html"
    }
    if (planetinput== Planet2alt){
        window.location.href = "bonadan.html"
    }
}