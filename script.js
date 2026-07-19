//==============================
// ELEMENTOS
//==============================

const intro = document.getElementById("intro");

const startButton = document.getElementById("startButton");

const envelopeSection = document.getElementById("envelopeSection");

const envelope = document.getElementById("envelope");

const lid = document.querySelector(".lid");

const letterSection = document.getElementById("letterSection");

const music = document.getElementById("music");

const typing = document.getElementById("typing");


//==============================
// MENSAJE
//==============================

const message = `

Mi amor bonito...

Hoy solo quería regalarte unos minutos de mi corazón.

A veces las palabras no alcanzan para expresar todo lo que siento por ti...
Se que hoy no hay ninguna fecha especial jajaja así que esto te tomará por sorpresa.
Eres todo lo que quiero para mi, eres increible, única, preciosa y por supuesto muy valiosa.

Gracias por cada sonrisa.
Gracias por cada abrazo.
Gracias por cada momento que hemos vivido.

Desde aquel 5 de mayo de 2025 mi vida cambió completamente.

Llegaste para darle más color a mis días y más motivos a mi corazón para sonreír.

No eres solamente mi novia...
Eres mi mejor amiga.
Mi apoyo.
Mi tranquilidad.
Mi alegría.

Y una de las mayores bendiciones que Dios me ha permitido conocer.
Deseo seguir caminando contigo, creciendo contigo y construyendo recuerdos que nunca olvidemos.

Gracias por elegirme.
Y gracias por permitirme amarte.

Te amo muchísimo.
Con todo mi corazón...

Mateo ❤️

`;


//==============================
// BOTÓN INICIAL
//==============================

startButton.addEventListener("click",()=>{

    intro.classList.add("hidden");

    envelopeSection.classList.remove("hidden");

    music.play().catch(()=>{});

});


//==============================
// ABRIR SOBRE
//==============================

envelope.addEventListener("click", () => {

    // Abrir tapa
    lid.style.transform = "rotateX(180deg)";

    // Desaparecer el sobre
    setTimeout(() => {
        envelope.classList.add("hide");
    }, 800);

    // Mostrar la carta
    setTimeout(() => {

        envelopeSection.style.display = "none";

        letterSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        typeWriter();

    }, 1500);

});


//==============================
// EFECTO ESCRITURA
//==============================

let index=0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }

}


//==============================
// BOTÓN FINAL
//==============================

//==============================
// ESTRELLAS
//==============================

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    stars.appendChild(star);

}