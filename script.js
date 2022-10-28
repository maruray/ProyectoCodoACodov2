const burger = document.querySelector('nav svg');

burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        gsap.to(".links", { x: "100%" });
        gsap.to(".line", { stroke: "white" });
        gsap.set("body", { overflow: "auto" });
        gsap.set("body", { overflowX: "hidden" });
    } else {
        gsap.to(".links", { x: "0%" });
        gsap.to(".line", { stroke: "black" });
        gsap.fromTo('.links a', {opacity: 0, y: 0}, {opacity: 1, y:20, delay: 0.5, stagger: 0.25});
        gsap.set("body", { overflow: "hidden" });
    }
    burger.classList.toggle("active");
});
//new burguer full width

//function openNav() {
 //   document.getElementById("mySidenav").style.width = "100%";
 // }
  
  /* Close/hide the sidenav */
 // function closeNav() {
 //   document.getElementById("mySidenav").style.width = "0";
 // }

//new burguer overlay
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


const videos = gsap.utils.toArray(".video")
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        markers: true,
        onEnter: () => {
            gsap.to(video, { opacity: 1 });
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});
var formulario = document.getElementsByName('forms')[0];  

// --------------------------------------------------------
// Validamos Nombre
// --------------------------------------------------------
var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {     
        alert("Complete el campo nombre");
        e.preventDefault();
    }
};

// --------------------------------------------------------
// Validamos Apellido
// --------------------------------------------------------
var validarApellido = function (e) {
    if (formulario.apellido.value == 0) {      
        alert("Completa el campo apellido");
        e.preventDefault();
    }
};


// --------------------------------------------------------
// Validamos Terminos y Condiciones
// --------------------------------------------------------
var validarCheckbox = function (e) {
    if (formulario.terminos.checked == false) {
        alert("Acepta los términos y condiciones");
        e.preventDefault();
    }
};

// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las tres validaciones
// --------------------------------------------------------
var validar = function (e) {  
    validarNombre(e);
    validarApellido(e);
    validarCheckbox(e);
};

// --------------------------------------------------------
// 
// 
formulario.addEventListener("submit", validar);


function traerDatosAPI() {
    fetch('https://randomuser.me/api') // API a leer
        // Cuando ha finalizado la lectura
        // guardo en datos el texto leido:
        .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
        .then(datos => {
            // Y luego copio ese texto en #contenido.
            contenido.innerHTML +=
                `<div class="tarjeta">
                 <img class="foto" src = "${datos.results[0].picture.large}"</img><br>                      
                 <h3 class="nombre">"Lorem ipsum dolor sit amet"</h3><br>
                 <br>
                 <p>Consectetur adipisicing elit. Fugiat sint necessitatibus officiis quibusdam est voluptatum culpa aut facilis.</p><br>
                 <h4 class="nombre">${datos.results[0].name.last}, ${datos.results[0].name.first}</h4><br>
                 </div>`
        })
        
}