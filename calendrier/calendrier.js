// Tableau d'objet pour incrémenter les questions de ".pop"

const fiche =[
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
        img:"../asset/ES6.jpeg",
        question: "En quelle année est sortie ES6 de Javascript?",
        select:["-- choisis ta réponse --","2013", "2014", "2015", "2016"]
    },
    {
        img:"../asset/JS.png",
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
function createPopUp (){
    if (window.innerWidth > 768) {
        const sectionElmt = document.createElement('section');
        sectionElmt.id = 'overlay';

        const divPop = document.createElement('div');
        divPop.className = 'pop';

        const imgElmt = document.createElement('img');
        imgElmt.className='illustration';
        imgElmt.src = fiche[0].img;
        imgElmt.alt = "illustration";

        const divRBox = document.createElement('div');
        divRBox.className = 'right-box';

        const divClose = document.createElement('div');
        divClose.className = 'close-window';

        const spanX = document.createElement('span');
        spanX.className = 'close-cross-x';
        const spanY = document.createElement('span');
        spanY.className = 'close-cross-y';

        divClose.appendChild(spanX);
        divClose.appendChild(spanY);

        const p = document.createElement('p');
        p.innerHTML = fiche[0].question;
        p.className = 'question';

        const divSelectGo = document.createElement('div');
        divSelectGo.className = 'Select-Go';

        const select = document.createElement('select');
        select.className = 'select';

        const option0 = document.createElement ('option');
        option0.value = "-- choisis ta réponse --";
        option0.innerText = "-- choisis ta réponse --";
        const option1 = document.createElement ('option');
        option1.value = fiche[0].select[1];
        option1.innerText = fiche[0].select[1];
        const option2 = document.createElement ('option');
        option2.value = fiche[0].select[2];
        option2.innerText = fiche[0].select[2];
        const option3 = document.createElement ('option');
        option3.value = fiche[0].select[3];
        option3.innerText = fiche[0].select[3];
        const option4 = document.createElement ('option');
        option4.value = fiche[0].select[4];
        option4.innerText = fiche[0].select[4];

        select.appendChild(option0);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);

        const button = document.createElement('button');
        button.className ='Go';
        button.innerText ='Go!';

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
        const sectionElmt = document.createElement('section');
            sectionElmt.id= 'volet';

            const divPop = document.createElement('div');
            divPop.className='pop';

            const imgElmt = document.createElement('img');
            imgElmt.className = 'illustration';
            imgElmt.src = fiche[0].img;
            imgElmt.alt = "illustration";

            const p = document.createElement('p');
            p.innerHTML = fiche[0].question;
            p.className = 'question';

            const divRBox = document.createElement('div');
            divRBox.className = 'right-box';

            const select = document.createElement('select');
            select.className = 'select';

            const option0 = document.createElement ('option');
            option0.value = "-- choisis ta réponse --";
            option0.innerText = "-- choisis ta réponse --";
            const option1 = document.createElement ('option');
            option1.value = fiche[0].select[1];
            option1.innerText = fiche[0].select[1];
            const option2 = document.createElement ('option');
            option2.value = fiche[0].select[2];
            option2.innerText = fiche[0].select[2];
            const option3 = document.createElement ('option');
            option3.value = fiche[0].select[3];
            option3.innerText = fiche[0].select[3];
            const option4 = document.createElement ('option');
            option4.value = fiche[0].select[4];
            option4.innerText = fiche[0].select[4];

            select.appendChild(option0);
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
            select.appendChild(option4);

            const button = document.createElement('button');
            button.className ='Go';
            button.innerText ="GO!";

            divRBox.appendChild(select);
            divRBox.appendChild(button);

            divPop.appendChild(imgElmt);
            divPop.appendChild(p);
            divPop.appendChild(divRBox);

            sectionElmt.appendChild(divPop);

            return sectionElmt;
        
    }
}

const insertAfter = (newNode, target) =>{
    target.parentNode.insertBefore(newNode,target.nextElementSibling) 
 }

const jour = document.querySelectorAll(".jour-on");
jour.forEach((element) => {
element.addEventListener("click", (event) =>{
    /*event.target.appendChild(createPopUp());*/
    const contenu = document.querySelector('.contenu');
    contenu.appendChild(createPopUp());

    if (window.innerWidth > 768) {
 
    document.getElementById("overlay").style.display = "block";
    document.querySelector(".pop").style.display = "flex";
    document.getElementById("opacity").style.display = "block";     

        // Fermeture de la fenetre en Desktop sans validation

    document.querySelector(".close-window")
    .addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
        document.querySelector(".pop").style.display = "none";
        document.getElementById("opacity").style.display = "none";
    });

        //survol de Go par la souris

    let gogo = document.querySelector(".Go");
    gogo.addEventListener("mouseover", function(event){
        event.target.style.boxShadow = "2px 6px 12px #aaa";
    }) 
    gogo.addEventListener("mouseleave", function(event){
        event.target.style.boxShadow = "none";
    })

        // Fermeture de la fenetre en Desktop après validation

    
    let selectMobile = document.querySelector(".select");

    selectMobile.addEventListener("change", function () {
        if (selectMobile.value !== "0") {
            gogo.removeAttribute("disabled");
            gogo.style.backgroundColor = "#41b56f";
            gogo.style.color = "#fff";
        } else {
            gogo.setAttribute("disabled", "disabled");
            gogo.style.backgroundColor = "#eee";
            gogo.style.color ="black";
        }
        });

    gogo.addEventListener("click", function () {
        if (document.querySelector("select").value !== "0") {
            document.getElementById("overlay").style.display = "none";
            document.querySelector(".pop").style.display = "none";
            document.getElementById("opacity").style.display = "none";
            document.querySelector(".jour-on").style.backgroundColor = "#41b56f";
        }
    });
} else {

    insertAfter(createPopUp(),event.currentTarget)
    
    const jour = document.querySelectorAll(".jour-on");
        
            
        document.getElementById("volet").classList.toggle("open");
            
        

    // activation du bouton Go après selection réponse.

        
        
        const select = document.querySelector('.select');
        select.addEventListener("change", function () {
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
        const gogo = document.querySelector('.Go');
        gogo.addEventListener("click", function () {
            document.getElementById("volet").classList.toggle("open");
            document.querySelector(".jour-on").style.backgroundColor = "#41b56f";
        });
}
})
})
