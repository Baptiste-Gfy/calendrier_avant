document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    document.querySelector(".main-header").classList.toggle("open");
  });
});
