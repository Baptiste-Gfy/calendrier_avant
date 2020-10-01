// I'm waiting for the DOM to load to run the script.

document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    let header = document.querySelector(".main-header");

    e.currentTarget.classList.toggle("open");

    header.classList.toggle("open");
  });

  document.body.addEventListener("click", (e) => {
    let header = document.querySelector(".main-header");
    let burger = document.querySelector(".burger");

    if (!e.target.classList.contains("burger")) {
      header.classList.remove("open");
      burger.classList.remove("open");
    }
  });
});
