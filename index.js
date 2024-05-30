let threeDots = document.querySelector("#icon");
let menuWrap = document.querySelector(".menu-wrap");

threeDots.addEventListener("click", () => {
  menuWrap.classList.toggle("active");
});
