document.querySelectorAll(".button").forEach((element) => {
  element.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.id;
  });
});

document.querySelector("#restColor").addEventListener("click", () => {
  document.body.style.backgroundColor = "#212112";
});

document.querySelector("#randomButton").addEventListener("click", () => {
  let redColor = Math.round(Math.random() * 255);
  let greenColor = Math.round(Math.random() * 255);
  let blueColor = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
});


let body = document.getElementsByTagName("body")[0]

console.log(body);