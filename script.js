let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById('nav').classList = '';
    menuVisible = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById('nav').classList = '';
  menuVisible = false;
}

document.addEventListener('DOMContentLoaded', function () {
  let nombre = document.getElementById('nombre');
  let email = document.getElementById('email');
  let numero = document.getElementById('numero');
  let asunto = document.getElementById('asunto');
  let mensaje = document.getElementById('mensaje');
  let enviar = document.getElementById('enviar');
  let emailError = document.getElementById('emailError');
  let nombreError = document.getElementById('nombreError');
  let asuntoError = document.getElementById('asuntoError');
  const emailAEnviar = {
    nombre: '',
    email: '',
    numero: '',
    asunto: '',
    mensaje: '',
  };

  nombre.addEventListener('input', function () {
    if (nombre.value.length < 3) {
      nombre.style.border = '1px solid red';
      nombre.style.borderRadius = '15px';
      nombreError.textContent = 'Minimo 3 caracteres';
      nombreError.style.color = 'red';
    } else {
      nombre.style.border = '1px solid green';
      nombreError.textContent = '';
    }
    emailAEnviar.nombre = nombre.value;
  });

  email.addEventListener('input', function () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/.test(email.value)) {
      email.style.border = '1px solid green';
      email.style.borderRadius = '15px';
      emailError.textContent = '';
      email.style.color = 'white';
    } else {
      email.style.border = '1px solid red';
      email.style.borderRadius = '15px';
      email.style.color = 'red';
      emailError.style.color = 'red';
      emailError.textContent = 'Formato de email incorrecto';
    }
    emailAEnviar.email = email.value;
  });

  numero.addEventListener('input', function () {
    let valorActual = numero.value;
    numero.style.border = '1px solid green';
    numero.style.borderRadius = '15px';
    emailAEnviar.numero = valorActual;
  });

  asunto.addEventListener('input', function () {
    if (asunto.value.length < 8) {
      asuntoError.textContent = 'Minimo 8 caracteres';
      asuntoError.style.color = 'red';
      asunto.style.border = '1px solid red';
      asunto.style.borderRadius = '15px';
    } else {
      asuntoError.textContent = '';
      asunto.style.border = '1px solid green';
      asunto.style.borderRadius = '15px';
    }
  });

  mensaje.addEventListener('input', function () {
    if (mensaje.value.length < 20) {
      mensajeError.textContent = 'Minimo 20 caracteres';
      mensajeError.style.color = 'red';
      mensaje.style.borderRadius = '15px';
      mensaje.style.border = '1px solid red';
    } else {
      mensaje.style.border = '1px solid green';
      mensajeError.textContent = '';
    }
  });
});
