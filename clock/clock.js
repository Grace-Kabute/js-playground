//set interval
setInterval(setClock, 1000);
//set rotation values
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    //get the curent date
    const currentDate = new Date();
    //get the seconds
    const secondsRatio = currentDate.getSeconds() / 60
        //get the minutes
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
        //get the hours
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
//function to get rotation values
function setRotation(element, rotationRatio) {
    //get the element and the style of the element then class the setProperty method
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()