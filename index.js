const checkForm = (regexp, target, errorName) => {
  if (regexp.test(target.value)) {
    target.classList.remove("error");
    target.classList.add("valid-form");
    document.querySelector(`.${errorName}`).style.display = "none";
  } else {
    target.classList.remove("valid-form");
    target.classList.add("error");
    document.querySelector(`.${errorName}`).style.display = "block";
  }
};

// I'm waiting for the DOM to load to run the script.
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");

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

  /**Contact formulaire ===================================*/

  const form = document.getElementById("contact"),
    name = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("I'm here");
    const regExpName = new RegExp(
        /^([a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{2,20})$/
      ),
      regExpEmail = new RegExp(/^([\w-]+)@([A-Za-z]+)\.([A-Za-z]{2,})$/);
    let name = document.getElementById("name"),
      email = document.getElementById("email");

    checkForm(regExpName, name, "error-name");

    checkForm(regExpEmail, email, "error-email");
  });

  [name, email, message].forEach((element) => {
    element.addEventListener("change", (e) => {
      const name = document.getElementById("name"),
        email = document.getElementById("email"),
        message = document.getElementById("message"),
        sendButton = document.getElementById("send-form-contact");

      if (name.value && email.value && message.value) {
        sendButton.removeAttribute("disabled");
        sendButton.classList.add("btn-valid");
        sendButton.classList.remove("btn-disabled");
      } else {
        sendButton.classList.remove("btn-valid");
        sendButton.classList.add("btn-disabled");
        sendButton.setAttribute("disabled", "");
      }
    });
  });
});
