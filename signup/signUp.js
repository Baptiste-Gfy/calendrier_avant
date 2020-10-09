// recuperer input name,email,select
// if name value not ""
// if email value not ""
// if select vallue not ""

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const select = document.querySelector("#campus");
const accepte = document.querySelector("#accepte");

[name, email, campus, accepte].forEach((element) => {
  element.addEventListener("change", () => {
    const btn = document.querySelector("#jouer");
    if (name.value && email.value && select.value !== "" && accepte.checked) {
      btn.classList.remove("btn-disabled");
      btn.classList.add("btn-valid");
    } else {
      btn.classList.remove("btn-valid");
      btn.classList.add("btn-disabled");
    }
  });
});
