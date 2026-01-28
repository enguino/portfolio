const button3 = document.querySelector("#button3")
const tinybutton4 = document.querySelector("#tinybutton4")
const tinybutton1 = document.querySelector("#tinybutton1")
const tinybutton2 = document.querySelector("#tinybutton2")

let lightMode = true;


// if lightmode is true, turn it to dark mode, if it isnt, turn it to lightmode, then after,
button3.onclick = function(){
    if (lightMode) {
        document.body.style.background = "linear-gradient(to bottom right, #111, #333)";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "linear-gradient(to bottom right, #fefefe, #e0e0e0)";
        document.body.style.color = "black";
        
    }

    lightMode = !lightMode
};

tinybutton4.onclick = function(){
    document.querySelector(".grids1").style.display = "none";
    document.querySelector(".grids2").style.display = "grid";
}

tinybutton1.onclick = function(){
    document.querySelector(".grids2").style.display = "none"
    document.querySelector(".grids1").style.display = "grid"
}

tinybutton2.onclick = function(){
    document.querySelector("grids1").style.display = "none";
    document.querySelector("grids2").style.display = "none";
    
}