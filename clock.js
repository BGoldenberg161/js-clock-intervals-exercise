const rightNow = new Date();
let seconds = rightNow.getSeconds();
let minutes = rightNow.getMinutes();
let hours = rightNow.getHours() % 12;


//deg roation/sec for second hand
function secondRotation(seconds) {
      let degRotation = seconds * 6;
      return degRotation
    }
 
    //deg roation/sec for min hand
function minRotation(minutes, seconds) {
    //   let degRotation = (minutes * 6) + (seconds * 6) / (minutes * 60);
    let totalSeconds = minutes * 60 + seconds;
    let degRotation = totalSeconds * .1;
    return degRotation;
    }

    //deg roation/sec for hour hand
function hourRotation(hours, minutes) {
    
    let totalMinutes = 60*hours+minutes;  
    let degRotation = .5*totalMinutes;
      return degRotation;
    }

function tick() {
    seconds ++;

    if (seconds >= 60) {
        seconds = 0;
        minutes ++;
    } 
    if (minutes >= 60) {
        minutes = 0;
        hours ++;
    }
    if (hours >= 12) {
        hours = 0;
    }
    // es5 notation
    secHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)';
    // es6 notation
    minHand.style.transform = `rotate(${minRotation(minutes, seconds)}deg)`;
    hourHand.style.transform = `rotate(${hourRotation(hours, minutes)}deg)`;

}

document.addEventListener('DOMContentLoaded', function() {
    secHand = document.querySelector('#second');
    minHand = document.querySelector('#minute');
    hourHand = document.querySelector('#hour');

    setInterval(tick, 1000);
});