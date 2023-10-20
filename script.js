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
const errors = {
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
};
let enviar = document.getElementById('enviar');
let span = document.getElementById('span');
function seleccionar(sectionId) {
  const enlaces = document.querySelectorAll('#nav ul li a');

  enlaces.forEach((enlace) => {
    enlace.style.color = 'white';
  });

  const enlaceActivo = document.querySelector(`[href="#${sectionId}"]`);
  enlaceActivo.style.color = '#1CB698';

  menuVisible = false;
}

document.addEventListener('DOMContentLoaded', function () {
  let nombre = document.getElementById('from_name');
  let email = document.getElementById('email_id');
  let numero = document.getElementById('numero');
  let asunto = document.getElementById('asunto');
  let mensaje = document.getElementById('message');
  let emailError = document.getElementById('emailError');
  let nombreError = document.getElementById('nombreError');
  let asuntoError = document.getElementById('asuntoError');

  nombre.addEventListener('input', function () {
    if (nombre.value.length < 3) {
      nombre.style.border = '1px solid red';
      nombre.style.borderRadius = '15px';
      nombreError.textContent = 'Minimo 3 caracteres';
      nombreError.style.color = 'red';
      errors.nombre = 'Error';
    } else {
      nombre.style.border = '1px solid green';
      nombreError.textContent = '';
      errors.nombre = '';
    }
  });

  email.addEventListener('input', function () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/.test(email.value)) {
      email.style.border = '1px solid green';
      email.style.borderRadius = '15px';
      emailError.textContent = '';
      email.style.color = 'white';
      errors.asunto = '';
    } else {
      email.style.border = '1px solid red';
      email.style.borderRadius = '15px';
      email.style.color = 'red';
      emailError.style.color = 'red';
      emailError.textContent = 'Formato de email incorrecto';
      errors.asunto = 'Error';
    }
    disabled();
  });

  numero.addEventListener('input', function () {
    numero.style.border = '1px solid green';
    numero.style.borderRadius = '15px';
  });

  asunto.addEventListener('input', function () {
    if (asunto.value.length < 5) {
      asuntoError.textContent = 'Minimo 5 caracteres';
      asuntoError.style.color = 'red';
      asunto.style.border = '1px solid red';
      asunto.style.borderRadius = '15px';
      errors.asunto = 'Error';
    } else {
      asuntoError.textContent = '';
      asunto.style.border = '1px solid green';
      asunto.style.borderRadius = '15px';
      errors.asunto = '';
    }
    disabled();
  });

  mensaje.addEventListener('input', function () {
    if (mensaje.value.length < 15) {
      mensajeError.textContent = 'Minimo 15 caracteres';
      mensajeError.style.color = 'red';
      mensaje.style.borderRadius = '15px';
      mensaje.style.border = '1px solid red';
      errors.asunto = 'Error';
    } else {
      mensaje.style.border = '1px solid green';
      mensajeError.textContent = '';
      errors.asunto = '';
    }
    disabled();
  });
});

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  disabled();
  const serviceID = 'default_service';
  const templateID = 'template_952ht9f';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      alert('Sent!');
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});

function disabled() {
  if (Object.values(errors).includes('Error')) {
    enviar.disabled = true;
    span.style.display = 'none';
    enviar.style.border = '2px solid red';
    enviar.style.color = 'red';
  } else {
    enviar.disabled = false;
    span.style.display = 'block';
    enviar.style.color = 'white';
    enviar.style.border = '2px solid white';
  }
}
enviar.style.color = 'slategray';
enviar.style.border = '2px solid slategray';
span.style.display = 'none';

window.addEventListener('scroll', function () {
  const skillsSection = document.getElementById('skills');
  const skillsLink = document.querySelector('a[href="#skills"]');

  if (isElementInViewport(skillsSection)) {
    // La sección de habilidades está en la vista
    const nav = this.document.getElementById('nav');
    nav.li.style.color = '#1CB698'; // Aplica un estilo resaltado al enlace
  } else {
    // La sección de habilidades no está en la vista
  }
});
