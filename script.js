const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
});

open.addEventListener("click", () => {
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
});
