// Tableau d'objet pour incrémenter les questions de ".pop"

/*const fiche =[
    {
        img:"../asset/Linus Torvald.jpg",
        question: "Qui est l'inventeur de GIT?",
        select:["-- choisis ta réponse --", "Benoit Le Bourdonnec", "Bill Gates", "Linus Torvald", "Obi Wan Kenobi"]
    },
    {
        img:"../asset/responsive.jpg",
        question: "En CSS, quel est le point de rupture usuellement utilisé pour marquer le passage mobile/desktop",
        select:["-- choisis ta réponse --","668px", "958px", "876px", "768px"]
    },
    {
        img:"../asset/ES6.jpg",
        question: "En quelle année est sortie ES6 de Javascript?",
        select:["-- choisis ta réponse --","2013", "2014", "2015", "2016"]
    },
    {
        img:"../asset/JS.jpg",
        question: "quelle fonction me permet de transformer un talbeau en chaine de caratère?",
        select:["-- choisis ta réponse --",".concat()", ".join()", ".split()", ".includes()"]
    },
    {
        img:"../asset/Ted.jpg",
        question: "Quel est le nom du conférencier TEDtalk introduit par Jayem lors de sa présentation?",
        select:["-- choisis ta réponse --","David Mccandless", "Connor MacLeod", "Torti Mac&Cheese", "Russell Mulcahy"]
    },
    {
        img:"../asset/responsive.jpg",
        question: "En CSS, quel est le point de rupture usuellement utilisé pour marquer le passage mobile/desktop",
        select:["-- choisis ta réponse --","668px", "958px", "876px", "768px"]
    },
    {
        img:"../asset/johndoe.jpg",
        question: "la première semaine, nous avons créé une chaine de prénom lors du breakie, quel était le premier et dernier de la liste?(Bastien exclus)",
        select:["-- choisis ta réponse --","François/Brice", "Anaïs/Emeric", "Florian/Florian", "François/Jimmy"]
    },
    
]

for (let question of fiche) {
    insertFiche(question);
}*/

if (window.innerWidth > 768) {
  // création des éléments de la popUp Desktop.

  /*function insertFiche(question) {
    const sectionElmt = document.createElement('section');
    sectionElmt.classList.add('#overlay');

    const divPop = document.createElement('div');
    divPop.classList.add('pop');

    const imgElmt = document.createElement('img');
    imgElmt.classList.add('.illustration');
    imgElmt.src = fiche.img;
    imgElmt.alt = "illustration";

    const divRBox = document.createElement('div');
    divRBox.className = 'right-box';

    const divClose = document.createElement('div');
    divClose.className = 'close-window';

    const spanX = document.createElement('span');
    spanX.className = 'close-cross-x';
    const spanY = document.createElement('span');
    spanY.className = 'close-cross-Y';

    const p = document.createElement('p');
    p.innerHTML = fiche.question;

    const divSelectGo = document.createElement('div');
    divSelectGo.className = 'Select-Go'

    const select = document.createElement('select');
    select.className = 'select';

    const option = document.createElement ('option');
    option.value = "-- choisis ta réponse --";
    const option1 = document.createElement ('option');
    option1.value = fiche.select[0];
    const option2 = document.createElement ('option');
    option2.value = fiche.select[1];
    const option3 = document.createElement ('option');
    option3.value = fiche.select[2];
    const option4 = document.createElement ('option');
    option4.value = fiche.select[3];

    const button = document.createElement('button');
    button.className ='Go';
}*/

  // Ouverture de la fenetre en Desktop

  const jour = document.querySelectorAll(".jour-on");
  for (let i = 0; i < jour.length; i++) {
    jour[i].addEventListener("click", function () {
      document.getElementById("overlay").style.display = "block";
      document.querySelector(".pop").style.display = "flex";
      document.getElementById("opacity").style.display = "block";
    });
  }

  // Fermeture de la fenetre en Desktop sans validation

  document.querySelector(".close-window")
    .addEventListener("click", function () {
      document.getElementById("overlay").style.display = "none";
      document.querySelector(".pop").style.display = "none";
      document.getElementById("opacity").style.display = "none";
    });

  // Fermeture de la fenetre en Desktop après validation

  let gogo = document.querySelector(".Go");
  let selectMobile = document.querySelector(".select");

  selectMobile.addEventListener("change", function () {
    if (selectMobile.value !== "0") {
      gogo.removeAttribute("disabled");
      gogo.style.backgroundColor = "#41b56f";
      gogo.style.color = "#fff";
    } else {
      gogo.setAttribute("disabled", "disabled");
    }
  });

  document.querySelector(".Go").addEventListener("click", function () {
    if (document.querySelector("select").value !== "0") {
      document.getElementById("overlay").style.display = "none";
      document.querySelector(".pop").style.display = "none";
      document.getElementById("opacity").style.display = "none";
      document.querySelector(".jour-on").style.backgroundColor = "#41b56f";
    }
  });
}

if (window.innerWidth < 768) {
  // création des éléments de la popUp mobile.

  /*function insertFiche(question) {
    const sectionElmt = document.createElement('section');
    sectionElmt.classList.add('#volet');

    const divPop = document.createElement('div');
    divPop.classList.add('pop');

    const imgElmt = document.createElement('img');
    imgElmt.classList.add('.illustration');
    imgElmt.src = fiche.img;
    imgElmt.alt = "illustration";

    const p = document.createElement('p');
    p.innerHTML = fiche.question;

    const divRBox = document.createElement('div');
    divRBox.className = 'right-box';

    const select = document.createElement('select');
    select.className = 'select';

    const option = document.createElement ('option');
    option.value = "-- choisis ta réponse --";
    const option1 = document.createElement ('option');
    option1.value = fiche.select[0];
    const option2 = document.createElement ('option');
    option2.value = fiche.select[1];
    const option3 = document.createElement ('option');
    option3.value = fiche.select[2];
    const option4 = document.createElement ('option');
    option4.value = fiche.select[3];

    const button = document.createElement('button');
    button.className ='Go';


}*/

  // Ouverture/fermeture du volet en mode Mobile

  const jour = document.querySelectorAll(".jour-on");
  for (let i = 0; i < jour.length; i++) {
    jour[i].addEventListener("click", function () {
      document.getElementById("volet").classList.toggle("open");
    });
  }

  // activation du bouton Go après selection réponse.

  let gogo = document.querySelector(".Go");
  let selectMobile = document.querySelector(".select");

  selectMobile.addEventListener("change", function () {
    if (selectMobile.value !== "0") {
      gogo.removeAttribute("disabled");
      gogo.style.backgroundColor = "#41b56f";
      gogo.style.color = "#fff";
      gogo.style.border = "none";
    } else {
      gogo.setAttribute("disabled", "disabled");
    }
  });

  // validation réponse et fermeture volet.

  gogo.addEventListener("click", function () {
    document.getElementById("volet").classList.toggle("open");
    document.querySelector(".jour-on").style.backgroundColor = "#41b56f";
  });
}
