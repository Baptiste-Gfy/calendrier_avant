// Tableau d'objet pour incrémenter les questions de ".pop"

const fiche = [
  {
    img: "../asset/Linus Torvald.jpg",
    question: "Qui est l'inventeur de GIT?",
    select: [
      "-- choisis ta réponse --",
      "Benoit Le Bourdonnec",
      "Bill Gates",
      "Linus Torvald",
      "Obi Wan Kenobi",
    ],
  },
  {
    img: "../asset/responsive.jpg",
    question:
      "En CSS, quel est le point de rupture usuellement utilisé pour marquer le passage mobile/desktop",
    select: ["-- choisis ta réponse --", "668px", "958px", "876px", "768px"],
  },
  {
    img: "../asset/ES6.jpeg",
    question: "En quelle année est sortie ES6 de Javascript?",
    select: ["-- choisis ta réponse --", "2013", "2014", "2015", "2016"],
  },
  {
    img: "../asset/JS.png",
    question:
      "quelle fonction me permet de transformer un talbeau en chaine de caratère?",
    select: [
      "-- choisis ta réponse --",
      ".concat()",
      ".join()",
      ".split()",
      ".includes()",
    ],
  },
  {
    img: "../asset/Ted.jpg",
    question:
      "Quel est le nom du conférencier TEDtalk introduit par Jayem lors de sa présentation?",
    select: [
      "-- choisis ta réponse --",
      "David Mccandless",
      "Connor MacLeod",
      "Torti Mac&Cheese",
      "Russell Mulcahy",
    ],
  },
  {
    img: "../asset/responsive.jpg",
    question:
      "En CSS, quel est le point de rupture usuellement utilisé pour marquer le passage mobile/desktop",
    select: ["-- choisis ta réponse --", "668px", "958px", "876px", "768px"],
  },
  {
    img: "../asset/johndoe.jpg",
    question:
      "la première semaine, nous avons créé une chaine de prénom lors du breakie, quel était le premier et dernier de la liste?(Bastien exclus)",
    select: [
      "-- choisis ta réponse --",
      "François/Brice",
      "Anaïs/Emeric",
      "Florian/Florian",
      "François/Jimmy",
    ],
  },
];
const createPopUp = (img, question, answers) => {
  if (window.innerWidth > 768) {
    const sectionElmt = document.createElement("section");
    sectionElmt.id = "overlay";

    const divPop = document.createElement("div");
    divPop.className = "pop";

    const imgElmt = document.createElement("img");
    imgElmt.className = "illustration";
    imgElmt.src = img;
    imgElmt.alt = "illustration";

    const divRBox = document.createElement("div");
    divRBox.className = "right-box";

    const divClose = document.createElement("div");
    divClose.className = "close-window";

    const spanX = document.createElement("span");
    spanX.className = "close-cross-x";
    const spanY = document.createElement("span");
    spanY.className = "close-cross-y";

    divClose.appendChild(spanX);
    divClose.appendChild(spanY);

    const p = document.createElement("p");
    p.innerHTML = question;
    p.className = "question";

    const divSelectGo = document.createElement("div");
    divSelectGo.className = "Select-Go";

    const select = document.createElement("select");
    select.className = "select";

    const option0 = document.createElement("option");
    option0.value = "-- choisis ta réponse --";
    option0.innerText = "-- choisis ta réponse --";
    const option1 = document.createElement("option");
    option1.value = answers[1];
    option1.innerText = answers[1];
    const option2 = document.createElement("option");
    option2.value = answers[2];
    option2.innerText = answers[2];
    const option3 = document.createElement("option");
    option3.value = answers[3];
    option3.innerText = answers[3];
    const option4 = document.createElement("option");
    option4.value = answers[4];
    option4.innerText = answers[4];

    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    const button = document.createElement("button");
    button.className = "Go";
    button.innerText = "Go!";

    divSelectGo.appendChild(select);
    divSelectGo.appendChild(button);

    divRBox.appendChild(divClose);
    divRBox.appendChild(p);
    divRBox.appendChild(divSelectGo);

    divPop.appendChild(imgElmt);
    divPop.appendChild(divRBox);

    sectionElmt.appendChild(divPop);

    return sectionElmt;
  } else {
    const sectionElmt = document.createElement("section");
    sectionElmt.id = "volet";

    const divPop = document.createElement("div");
    divPop.className = "pop";

    const imgElmt = document.createElement("img");
    imgElmt.className = "illustration";
    imgElmt.src = img;
    imgElmt.alt = "illustration";

    const p = document.createElement("p");
    p.innerHTML = question;
    p.className = "question";

    const divRBox = document.createElement("div");
    divRBox.className = "right-box";

    const select = document.createElement("select");
    select.className = "select";

    const option0 = document.createElement("option");
    option0.value = "-- choisis ta réponse --";
    option0.innerText = "-- choisis ta réponse --";
    const option1 = document.createElement("option");
    console.log(answers[1]);
    option1.value = answers[1];
    option1.innerText = answers[1];
    const option2 = document.createElement("option");
    option2.value = answers[2];
    option2.innerText = answers[2];
    const option3 = document.createElement("option");
    option3.value = answers[3];
    option3.innerText = answers[3];
    const option4 = document.createElement("option");
    option4.value = answers[4];
    option4.innerText = answers[4];

    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    const button = document.createElement("button");
    button.className = "Go";
    button.innerText = "GO!";

    divRBox.appendChild(select);
    divRBox.appendChild(button);

    divPop.appendChild(imgElmt);
    divPop.appendChild(p);
    divPop.appendChild(divRBox);

    sectionElmt.appendChild(divPop);

    return sectionElmt;
  }
}

const insertAfter = (newNode, target) => {
  target.parentNode.insertBefore(newNode, target.nextElementSibling);
};

const checkSelect = (target) => {
    let gogo = document.querySelector(".Go");
  if (target.value !== "0") {
    gogo.removeAttribute("disabled");
    gogo.style.backgroundColor = "#41b56f";
    gogo.style.color = "#fff";
    gogo.style.border = "none";
  } else {
    gogo.setAttribute("disabled", "disabled");
  }
};

if (document.querySelector(".Go") !== null){
    
let gogo = document.querySelector(".Go");
      gogo.addEventListener("mouseover", function (event) {
        event.target.style.boxShadow = "2px 6px 12px #aaa";
      });
      gogo.addEventListener("mouseleave", function (event) {
        event.target.style.boxShadow = "none";
      });
};

const jour = document.querySelectorAll(".jour-on");

jour.forEach((element) => {
  element.addEventListener("click", (event) => {
    const currentElement = event.currentTarget
    const contenu = document.querySelector(".contenu");
  
    


    if (window.innerWidth > 768) {
        for (const index in fiche) {
      
            if (currentElement.getAttribute("index") == index) {
              
              contenu.appendChild(createPopUp(fiche[index].img, fiche[index].question, fiche[index].select));
              
            }
          }
      document.getElementById("overlay").style.display = "block";
      document.querySelector(".pop").style.display = "flex";
      document.getElementById("opacity").style.display = "block";

      // Fermeture de la fenetre en Desktop sans validation

      document
        .querySelector(".close-window")
        .addEventListener("click", function () {
          document.getElementById("overlay").parentNode.removeChild(document.getElementById("overlay"))
          
          document.getElementById("opacity").style.display = "none";
          
        });

      //survol de Go par la souris
      const select = document.querySelector(".select");
      select.addEventListener("change", () => checkSelect(select));  
      const gogo = document.querySelector(".Go");
      gogo.addEventListener("click", function () {
        document.getElementById("overlay").parentNode.removeChild(document.getElementById("overlay"))
        
        document.getElementById("opacity").style.display = "none";
        currentElement.style.backgroundColor = "#41b56f";
      });

      
    } else {
        console.log()
        if(currentElement.nextElementSibling.id !== "volet"){
            for (const index in fiche) {
      
            if (currentElement.getAttribute("index") == index) {
              
                insertAfter(createPopUp(fiche[index].img, fiche[index].question, fiche[index].select), currentElement);
              
            }
        }
      
        }
      const jour = document.querySelectorAll(".jour-on");

      document.getElementById("volet").classList.toggle("open");

      // activation du bouton Go après selection réponse.

      const select = document.querySelector(".select");

      select.addEventListener("change", () => checkSelect(select));

      // validation réponse et fermeture volet.
      const gogo = document.querySelector(".Go");
      gogo.addEventListener("click", function () {
        currentElement.nextElementSibling.remove()
        currentElement.style.backgroundColor = "#41b56f";
      });
    }
    
  });
});


