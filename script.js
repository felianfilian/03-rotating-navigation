let button_open = document.getElementById("open");
let button_close = document.getElementById("close");
let container = document.querySelector(".container");

button_open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

button_close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
