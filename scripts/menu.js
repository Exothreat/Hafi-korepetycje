const openMenu = document.querySelector(".open-menu");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
  openMenu.style.left = "-50px";
  overlay.style.display = "block";
  menu.style.left = "0px";
});

overlay.addEventListener("click", () => {
  openMenu.style.left = "0px";
  overlay.style.display = "none";
  menu.style.left = "-250px";
});
