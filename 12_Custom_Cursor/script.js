document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.querySelector("#main");
  const corsor = document.querySelector(".corsor");

  mainDiv.addEventListener("mousemove", (e) => {
    corsor.style.top = e.y + "px";
    corsor.style.left = e.x + "px";
  });
});
