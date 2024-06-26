const random = function () {
  let hex = "123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangeColor = function () {
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = random();
  }
};
const stopChangeColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);
