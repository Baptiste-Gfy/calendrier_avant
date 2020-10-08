// I'm waiting for the DOM to load to run the script.
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");

  //when we click on the burger menu we add the open class then when we click again we remove the open class.
  burger.addEventListener("click", (e) => {
    let header = document.querySelector(".main-header");

    e.currentTarget.classList.toggle("open");

    header.classList.toggle("open");
  });

  //When we clicked outside burger, we close the burger menu
  document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("slice-burger") && !e.target.classList.contains("burger")) {
      document.querySelector(".main-header").classList.remove("open");
      document.querySelector(".burger").classList.remove("open");
    }
  });
});
