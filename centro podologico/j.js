document.addEventListener("DOMContentLoaded", function () {
    // Carrusel automático
    let carrusel = document.getElementById("carrusel");
    let imagenes = carrusel.getElementsByTagName("img");
    let index = 0;

    function cambiarImagen() {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = "none";
        }
        imagenes[index].style.display = "block";
        index = (index + 1) % imagenes.length;
    }
    setInterval(cambiarImagen, 3000);
    cambiarImagen();

    // Enviar formulario de contacto
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;
        
        if (nombre && email && mensaje) {
            alert("Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
            document.getElementById("contactForm").reset();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});
