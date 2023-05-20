 
// JavaScript source code
//timer
const myInterval = setInterval(myTimer, 1000);
const later = new Date();

sec = 10;
later.setSeconds(later.getSeconds() + sec+2);
function myTimer() {
    const now = new Date();
    var distance = later - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the clock element
    document.getElementById("demo").innerHTML = formattedTime;

    if (distance < 0) {
        document.getElementById("demo").innerHTML = "youre time is up!";
        clearInterval(100);
    }
}

function myStopFunction() {
    clearInterval(myInterval);
}

//draw canvas
var canvas = document.getElementById("myCanvas");

//report the mouse position on click
canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    alert(mousePos.x + ',' + mousePos.y);
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//    ctx.addEventListener("drop", drop);
//    ctx.addEventListener("drag", drag);


function Rectangle(x, y, width, height, fillColor, outlineColor) {
    const ctx = document.getElementById('myCanvas').getContext('2d');



    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, width, height);

    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = 8;
    ctx.strokeRect(x + 1, y + 1, width - 2, height - 2);

   

}

function randomColor(colors, lastColors) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    while (lastColors.includes(color)) {
        color = colors[Math.floor(Math.random() * colors.length)];
    }
    return color;
}

const colors = ["red", "green", "blue", "yellow"];
let lastColors = [];

let color1 = randomColor(colors, lastColors);
console.log(color1);
lastColors.push(color1);

let color2 = randomColor(colors, lastColors);
console.log(color2);
lastColors.push(color2);

let color3 = randomColor(colors, lastColors);
console.log(color3);
lastColors.push(color3);

let color4 = randomColor(colors, lastColors);
console.log(color4);
lastColors.push(color4);

Rectangle(400, 140, 190, 90, color1, color2);
Rectangle(400, 240, 190, 90, "white", "grey");
Rectangle(400, 340, 190, 90, color2, color4);
Rectangle(190, 240, 190, 90, color3, color1);
Rectangle(610, 240, 190, 90, color4, color3);
