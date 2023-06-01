// JavaScript para la página de hamburguesería

// Función para mostrar un mensaje de bienvenida al cargar la página
function mostrarMensajeBienvenida() {
    alert("¡Bienvenido/a a nuestra hamburguesería! Disfruta de nuestras deliciosas hamburguesas caseras.");
  }
  
  // Función para enviar un mensaje de contacto
  function enviarMensajeContacto() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validar los campos de nombre, email y mensaje
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
      // Restablecer los campos del formulario
      document.getElementById("nombre").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensaje").value = "";
    }
  }
  
  // Event listener para mostrar el mensaje de bienvenida al cargar la página
  window.addEventListener("load", mostrarMensajeBienvenida);
  
  // Event listener para enviar el formulario de contacto
  document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    enviarMensajeContacto();
  });
  