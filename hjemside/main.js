const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

button1.onclick = function(){
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white"
    }
};

button2.onclick = function(){
    window.location.href = "index3.html";

};

button3.onclick = function(){
    window.location.href = "index4.html";
};

button4.onclick = function(){
    window.location.href = "index.html";
};

const box = document.getElementById('ducks');
const box1 = document.getElementById('ducks');


box.addEventListener('mousemove', (e) => {
    const img = box.querySelector('img');
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const relX = x / rect.width - 0.5;   // -0.5 to 0.5
    const relY = y / rect.height - 0.5;  // -0.5 to 0.5

    const moveX = relX * -40;  // tweak strength
    const moveY = relY * -40;

    img.style.transform = `translate(${moveX}px, ${moveY}px) scale(2)`;
});

box.addEventListener('mouseleave', () => {
    const img = box.querySelector('img');
    img.style.transform = 'translate(0, 0) scale(1)';
});

