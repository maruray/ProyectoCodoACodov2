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
// Validar Nombre
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
// Validar Interes
// --------------------------------------------------------
var validarRadio = function (e) {
    if (formulario.so[0].checked == true ||
        formulario.so[1].checked == true ||
        formulario.so[2].checked == true) {
    } else {  
        alert("Selecciona un interés");
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
    validarRadio(e);
    validarCheckbox(e);
};

// --------------------------------------------------------
// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM, no del botón!
formulario.addEventListener("submit", validar);