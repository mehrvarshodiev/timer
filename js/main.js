const showTimer = document.querySelector("#show-timer");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let counter = 0;
let timerId;

startBtn.disabled = false;
pauseBtn.disabled = true;
resetBtn.disabled = true;

//Start Button
startBtn.onclick = () => {
  console.log("startbtn");
  timerId = setInterval(() => {
    counter++;
    showTimer.textContent = counter;
  }, 1000);
  console.log("timerId", timerId);
  if (startBtn.textContent === "Давом додан") {
    startBtn.textContent = "Оғоз";
  }
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
};

//Pause Button
pauseBtn.onclick = () => {
  console.log("pausebtn");
  clearInterval(timerId);
  startBtn.textContent = "Давом додан";

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = false;
};

//Reset Button
resetBtn.onclick = () => {
  console.log("resetbtn");
  counter = 0;
  showTimer.textContent = counter;
  clearInterval(timerId);
  startBtn.textContent = "Оғоз";

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
};

//Current time

const showHour = document.querySelector("#show-hour");
const showHourBtn = document.querySelector("#hour-btn");

function getTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  showHour.textContent = `${h}:${m}:${s}`;
}
getTime();

showHourBtn.onclick = () => {
  setInterval(getTime, 1000);
  showHour.style.visibility = "visible";
  showHour.style.opacity = "1";
  showHour.style.marginLeft = "10px";
};
