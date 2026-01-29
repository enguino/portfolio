// Wrapper all javascript slik at htmlen rekker å laste ned først før den tildeler verdier.

document.addEventListener("DOMContentLoaded", () => {

    const lightbutton = document.querySelector("#lightbutton");

    const button2 = document.querySelector("#button2");
    const gif = document.querySelector("#gif");

    const interestbutton = document.querySelector("#interestbutton");
    const previousbutton = document.querySelector("#previousbutton");
    const nextbutton = document.querySelector("#nextbutton");
    const projectbutton = document.querySelector("#projectbutton");

    const grid1 = document.querySelector(".grids1");
    const grid2 = document.querySelector(".grids2");
    const grid3 = document.querySelector(".grids3");

    const grid4 = document.querySelector(".grids4");
    const grid5 = document.querySelector(".grids5");
    const grid6 = document.querySelector(".grids6");

    const grid7 = document.querySelector(".grids7");
    const grid8 = document.querySelector(".grids8");
    const grid9 = document.querySelector(".grids9");

    let lightMode = true;

    function isVisible(el) {
        return window.getComputedStyle(el).display !== "none";
    }

    function anyVisible(...elements) {
        return elements.some(el => window.getComputedStyle(el).display !== "none");
    }

    lightbutton.onclick = function(){
        if (lightMode) {
            document.body.style.background = "linear-gradient(to bottom right, #111, #333)";
            document.body.style.color = "white";
        } else {
            document.body.style.background = "linear-gradient(to bottom right, #fefefe, #e0e0e0)";
            document.body.style.color = "black";
        }
        lightMode = !lightMode;
    };

    button2.onclick = function () { 
        gif.style.display = "block"; 
        setTimeout(() => { 
            gif.style.display = "none"; 
        }, 5000);
    };

    interestbutton.onclick = function(){
        if (anyVisible(grid4, grid5, grid6)) {
            grid4.style.display = "none"; 
            grid5.style.display = "none"; 
            grid6.style.display = "none";
            grid1.style.display = "grid";
            document.querySelector(".titlebg").textContent = "Interests";


        } else if (anyVisible(grid7, grid8, grid9)) {
            grid7.style.display = "none"; 
            grid8.style.display = "none"; 
            grid9.style.display = "none"; 
            grid4.style.display = "grid";
            document.querySelector(".titlebg").textContent = "About Me";
 
        }
    };

    previousbutton.onclick = function(){
        if (isVisible(grid3)) {
            grid3.style.display = "none"; 
            grid1.style.display = "none"; 
            grid2.style.display = "grid"; 

        } else if (isVisible(grid2)) {
            grid3.style.display = "none"; 
            grid2.style.display = "none"; 
            grid1.style.display = "grid"; 
        }

        if (isVisible(grid6)) {
            grid6.style.display = "none"; 
            grid4.style.display = "none"; 
            grid5.style.display = "grid"; 

        } else if (isVisible(grid5)) {
            grid6.style.display = "none"; 
            grid5.style.display = "none"; 
            grid4.style.display = "grid"; 
        }

        if (isVisible(grid9)) {
            grid9.style.display = "none"; 
            grid7.style.display = "none"; 
            grid8.style.display = "grid"; 

        } else if (isVisible(grid8)) {
            grid8.style.display = "none"; 
            grid9.style.display = "none"; 
            grid7.style.display = "grid"; 
        }

    };

    nextbutton.onclick = function(){
        if (isVisible(grid1)) {
            grid3.style.display = "none"; 
            grid1.style.display = "none"; 
            grid2.style.display = "grid"; 

        } else if (isVisible(grid2)) {
            grid2.style.display = "none"; 
            grid1.style.display = "none"; 
            grid3.style.display = "grid"; 
        }

        if (isVisible(grid4)) {
            grid4.style.display = "none"; 
            grid6.style.display = "none"; 
            grid5.style.display = "grid"; 

        } else if (isVisible(grid5)) {
            grid5.style.display = "none"; 
            grid4.style.display = "none"; 
            grid6.style.display = "grid"; 
        }

        if (isVisible(grid7)) {
            grid7.style.display = "none"; 
            grid9.style.display = "none"; 
            grid8.style.display = "grid"; 

        } else if (isVisible(grid8)) {
            grid8.style.display = "none"; 
            grid7.style.display = "none"; 
            grid9.style.display = "grid"; 
        }
    };

    projectbutton.onclick = function(){
        if (anyVisible(grid4, grid5, grid6)) {
            grid4.style.display = "none"; 
            grid5.style.display = "none"; 
            grid6.style.display = "none";
            grid7.style.display = "grid";
            document.querySelector(".titlebg").textContent = "Projects";
            

        } else if (anyVisible(grid1, grid2, grid3)) {
            grid1.style.display = "none"; 
            grid2.style.display = "none"; 
            grid3.style.display = "none"; 
            grid4.style.display = "grid"; 
            document.querySelector(".titlebg").textContent = "About Me";

        }
    };

}); 
