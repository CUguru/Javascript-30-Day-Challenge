const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const timeNow = new Date();
  const seconds = timeNow.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if(secondsDegrees === 444) {
    secondHand.style.transition = `none`;
  }
  console.log(secondsDegrees);

  const minutes = timeNow.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = timeNow.getHours();
  const hourDegrees = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
