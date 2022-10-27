function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
 
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
