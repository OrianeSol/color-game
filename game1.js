 
// JavaScript source code

//timer
const myInterval = setInterval(myTimer, 1000);
const later = new Date();

var countered = 0; //make a thing that will check when the colors match
var counteblue = 0;
var counteyellow = 0;
var countergreen = 0;

sec = 10;
later.setSeconds(later.getSeconds() + sec + 2);

var isTimeUp = false; // Flag to check if the time is up
var isGameOver = false; // Flag to check if the game is over

function myTimer() {
    const now = new Date();
    var distance = later - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the clock element
    document.getElementById("demo").innerHTML = formattedTime;

    if (distance < 0)
    {
        document.getElementById("demo").innerHTML = "Your time is up!";
        clearInterval(myInterval); // Clear the interval and will stop the timer
        isTimeUp = true; //Set time-up flag
        checkGameStatus(); // Checking game status
    }
}

function goToFrontPage() {

    window.location.href = "color-game(newlinked).html";
}


var canvas = document.getElementById("myCanvas");



function checkGameStatus() {

    // Display a pop-up message
    
    if ((!isTimeUp) && (countered === true && counteblue === true && counteyellow === true && countergreen === true))
    {
        alert(" Winner! All of the specified images and border colors are in the drop positions!");
       
    }
    else if (isTimeUp && !(countered === true && counteblue === true && counteyellow === true && countergreen === true) )
    {
        alert(" Loser! The specified images and border colors are not in the drop positionskGameStatus.");
    }    
}


function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    //Check if the drop position contains the image URL+  border color
    if( ev.target.style.borderColor === "red" &&
        ev.target.querySelector("img").src === "https://www.color-name.com/color-image?c=FF7779&square"
    )
    {
        countered = true;
    }
    if( ev.target.style.borderColor === "blue" &&
        ev.target.querySelector("img").src === "https://www.travelandleisure.com/thmb/KTIha5CLifSoUD3gx0YP51xc3rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue0517-4dfc85cb0200460ab717b101ac07888f.jpg"
    )
    {
        counteblue = true;
    }
    if( ev.target.style.borderColor === "gold" &&
        ev.target.querySelector("img").src === "https://htmlcolorcodes.com/assets/images/colors/pastel-yellow-color-solid-background-1920x1080.png"
    ) 
    {
        counteyellow = true;
    }
    if( ev.target.style.borderColor === "limegreen" &&
        ev.target.querySelector("img").src === "https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
    )
    {
        countergreen = true;
    }
  
    // Check the game status
    checkGameStatus();

}



function getRandomColor(lastColors)
{
    var colors = ["blue", "red", "gold", "limegreen"];
    var availableColors = colors.filter(function (color)
    {
        return !lastColors.includes(color);
    });
    var randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors[randomIndex];
}

// Get the div elements
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');

var lastColors = [];

 //Set random outline color for each div
div1.style.borderColor = getRandomColor(lastColors);
div1.style.borderColor = getRandomColor(lastColors);
while (div1.style.borderColor === "red")
{
    div1.style.borderColor = getRandomColor(lastColors);
}
lastColors.push(div1.style.borderColor);

div2.style.borderColor = getRandomColor(lastColors);
while (div2.style.borderColor === "blue")
{
    div2.style.borderColor = getRandomColor(lastColors);
}
lastColors.push(div2.style.borderColor);

div3.style.borderColor = getRandomColor(lastColors);
while (div3.style.borderColor === "gold")
{
    div3.style.borderColor = getRandomColor(lastColors);
}
lastColors.push(div3.style.borderColor);

div4.style.borderColor = getRandomColor(lastColors);
while (div4.style.borderColor === "limegreen")
{
    div4.style.borderColor = getRandomColor(lastColors);
}
lastColors.push(div4.style.borderColor);

const expectedBorderColor = "red";
