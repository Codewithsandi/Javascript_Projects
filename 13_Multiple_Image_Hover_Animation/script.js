let elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (data) => {
    // val.childNodes[3].style.top = data.y + "px";
    val.childNodes[3].style.left = data.x + "px";
  });
});
