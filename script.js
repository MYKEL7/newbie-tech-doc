function togglebtn() {
    let toggle = document.getElementById("toggle").getAttribute("style");
    if(toggle == "transform: translateX(0px);") {
        document.getElementById("toggle").style.transform = "translateX(20px)";
        document.getElementById("bodybg").style.backgroundColor = "#615c5c";
        document.getElementById("txt").style.color = "#fff";
    }
    else {
        document.getElementById("toggle").style.transform = "translateX(0px)";
        document.getElementById("bodybg").style.backgroundColor ="#dbd7d7";
        document.getElementById("txt").style.color ="#5f5d60";
    }
}