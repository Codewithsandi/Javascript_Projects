const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let startInterval;

const randomColor = function () {
  const hexCode = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.round(Math.random() * 16)];
  }
  return color;
};

const startChangingColor = function () {
  if (!startInterval) {
    startInterval = setInterval(changeBackgroundColor, 1000);
  }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
start.addEventListener("click", startChangingColor);

const stopChangingColor = function () {
  clearInterval(startInterval);
  startInterval = null;
  console.log("stopped..");
};
stop.addEventListener("click", stopChangingColor);
