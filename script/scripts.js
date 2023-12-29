console.log("Welcome to home");
//
function irProyectos() {
  window.location.href = "project.html";
}
//
function validateName() {
  var nameInput = document.getElementById("exampleFormControlInput2");
  var nameError = document.getElementById("nameError");
  var regex = /^[a-zA-Z\s]+$/;

  if (nameInput.value.length > 25) {
    nameError.innerHTML = "El nombre no puede tener más de 30 caracteres.";
    nameInput.classList.add("error"); // Añade la clase error al input
    return false;
  } else if (!regex.test(nameInput.value)) {
    nameError.innerHTML = "El nombre no puede contener números.";
    nameInput.classList.add("error"); // Añade la clase error al input
    return false;
  } else {
    nameError.innerHTML = "";
    nameInput.classList.remove("error"); // Elimina la clase error del input
    return true;
  }
}

function validateEmail() {
  var emailInput = document.getElementById("id_reg_email");
  var emailError = document.getElementById("emailError");
  var regex = /\S+@\S+\.\S+/;

  /*if (!regex.test(emailInput.value)) {
    emailError.innerHTML = "Ingrese un correo válido.";
    emailInput.classList.add("error"); // Añade la clase error al input
    return false;
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error"); // Elimina la clase error del input
    return true;
  }*/
  if (emailInput.value.length > 35) {
    emailError.innerHTML = "El correo no puede tener más de 40 caracteres.";
    emailInput.classList.add("error"); // Añade la clase error al input
    return false;
  } else if (!regex.test(emailInput.value)) {
    emailError.innerHTML = "Ingrese un correo válido.";
    emailInput.classList.add("error"); // Añade la clase error al input
    return false;
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error"); // Elimina la clase error del input
    return true;
  }
}

/*function validateSubject() {
  var subjectInput = document.getElementById("exampleFormControlTextarea1");
  var subjectError = document.getElementById("subjectError");
  var maxLength = 200;

  if (subjectInput.value.length > maxLength) {
    subjectError.innerHTML = "El mensaje no puede tener más de 200 caracteres.";
    subjectInput.value = subjectInput.value.substring(0, maxLength); // Trunca el contenido
    return false;
  } else {
    subjectError.innerHTML = "";
    return true;
  }
}*/
function validateSubject() {
  var subjectInput = document.getElementById("exampleFormControlTextarea1");
  var subjectError = document.getElementById("subjectError");
  var maxLength = 200;

  if (subjectInput.value.trim() === "") {
    subjectError.innerHTML = "Por favor, ingrese su mensaje.";
    subjectInput.classList.add("error"); // Agrega la clase error al textarea
    return false;
  } else if (subjectInput.value.length > maxLength) {
    subjectError.innerHTML = "El mensaje no puede tener más de 200 caracteres.";
    subjectInput.value = subjectInput.value.substring(0, maxLength); // Trunca el contenido
    return false;
  } else {
    subjectError.innerHTML = "";
    subjectInput.classList.remove("error"); // Elimina la clase error del textarea
    return true;
  }
}

/*function validateForm() {
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isSubjectValid = validateSubject();

  // Validar que los campos estén completos
  var nameInput = document.getElementById("exampleFormControlInput2");
  var emailInput = document.getElementById("id_reg_email");
  var subjectInput = document.getElementById("exampleFormControlTextarea1");

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").innerHTML =
      "Por favor, ingrese su nombre.";
    return false;
  }

  if (emailInput.value.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "Por favor, ingrese su correo.";
    return false;
  }

  if (subjectInput.value.trim() === "") {
    document.getElementById("subjectError").innerHTML =
      "Por favor, ingrese su mensaje.";
    return false;
  }

  // Limpiar mensajes de error
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subjectError").innerHTML = "";

  return isNameValid && isEmailValid && isSubjectValid;
}*/
/*function validateForm() {
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isSubjectValid = validateSubject();

  // Validar que los campos estén completos
  var nameInput = document.getElementById("exampleFormControlInput2");
  var emailInput = document.getElementById("id_reg_email");
  var subjectInput = document.getElementById("exampleFormControlTextarea1");

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").innerHTML =
      "Por favor, ingrese su nombre.";
    return false;
  }

  if (emailInput.value.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "Por favor, ingrese su correo.";
    return false;
  }

  if (subjectInput.value.trim() === "") {
    document.getElementById("subjectError").innerHTML =
      "Por favor, ingrese su mensaje.";
    subjectInput.classList.add("error"); // Agrega la clase error al textarea
    return false;
  }

  // Limpiar mensajes de error y clases de error
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subjectError").innerHTML = "";
  subjectInput.classList.remove("error"); // Elimina la clase error del textarea

  return isNameValid && isEmailValid && isSubjectValid;
} funciona*/
function validateForm() {
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isSubjectValid = validateSubject();

  // Validar que los campos estén completos
  var nameInput = document.getElementById("exampleFormControlInput2");
  var emailInput = document.getElementById("id_reg_email");
  var subjectInput = document.getElementById("exampleFormControlTextarea1");
  var successMessage = document.getElementById("successMessage");

  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").innerHTML =
      "Por favor, ingrese su nombre.";
    return false;
  }

  if (emailInput.value.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "Por favor, ingrese su correo.";
    return false;
  }

  if (subjectInput.value.trim() === "") {
    document.getElementById("subjectError").innerHTML =
      "Por favor, ingrese su mensaje.";
    subjectInput.classList.add("error");
    return false;
  }

  // Limpiar mensajes de error y clases de error
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subjectError").innerHTML = "";
  subjectInput.classList.remove("error");

  // Mostrar mensaje de éxito y resetear el formulario
  successMessage.innerHTML = "¡Mensaje enviado!";
  setTimeout(function () {
    successMessage.innerHTML = "";
    document.getElementById("id_form_registra").reset();
  }, 3000);

  return isNameValid && isEmailValid && isSubjectValid;
}

function borrarFormulario() {
  // Obtener todos los campos del formulario
  var nameInput = document.getElementById("exampleFormControlInput2");
  var emailInput = document.getElementById("id_reg_email");
  var subjectInput = document.getElementById("exampleFormControlTextarea1");

  // Limpiar los valores de los campos
  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";

  // También puedes ocultar el mensaje de éxito si está visible
  var successMessage = document.getElementById("successMessage");
  successMessage.classList.add("hidden");
}
