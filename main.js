let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".second-hand");

function rotateHands() {
    let d = new Date();

    let sec = d.getSeconds();
    let secDegree = (sec * 6) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    let min = d.getMinutes();
    let minDegree = min * 6 + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    let hour = d.getHours();
    let hourDegree = hour * 30 + min / 2 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(rotateHands, 1000);