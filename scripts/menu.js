const openMenu = document.querySelector(".open-menu");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const body = document.querySelector(".body");

openMenu.addEventListener("click", () => {
  openMenu.style.left = "-50px";
  overlay.style.display = "block";
  menu.style.left = "0px";
  body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
  openMenu.style.left = "0px";
  overlay.style.display = "none";
  menu.style.left = "-250px";
  body.style.overflow = "visible";
});
