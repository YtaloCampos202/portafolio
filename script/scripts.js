console.log("asdqwdzw");
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
    nameInput.classList.add("error");
    return false;
  } else if (!regex.test(nameInput.value)) {
    nameError.innerHTML = "El nombre no puede contener números.";
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.innerHTML = "";
    nameInput.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  var emailInput = document.getElementById("id_reg_email");
  var emailError = document.getElementById("emailError");
  var regex = /\S+@\S+\.\S+/;

  if (emailInput.value.length > 35) {
    emailError.innerHTML = "El correo no puede tener más de 40 caracteres.";
    emailInput.classList.add("error");
    return false;
  } else if (!regex.test(emailInput.value)) {
    emailError.innerHTML = "Ingrese un correo válido.";
    emailInput.classList.add("error");
    return false;
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error");
    return true;
  }
}

function validateSubject() {
  var subjectInput = document.getElementById("exampleFormControlTextarea1");
  var subjectError = document.getElementById("subjectError");
  var maxLength = 200;

  if (subjectInput.value.trim() === "") {
    subjectError.innerHTML = "Por favor, ingrese su mensaje.";
    subjectInput.classList.add("error");
    return false;
  } else if (subjectInput.value.length > maxLength) {
    subjectError.innerHTML = "El mensaje no puede tener más de 200 caracteres.";
    subjectInput.value = subjectInput.value.substring(0, maxLength);
    return false;
  } else {
    subjectError.innerHTML = "";
    subjectInput.classList.remove("error");
    return true;
  }
}

function validateForm() {
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isSubjectValid = validateSubject();

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

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("subjectError").innerHTML = "";
  subjectInput.classList.remove("error");

  successMessage.innerHTML = "¡Mensaje enviado!";
  setTimeout(function () {
    successMessage.innerHTML = "";
    document.getElementById("id_form_registra").reset();
  }, 3000);

  return isNameValid && isEmailValid && isSubjectValid;
}

function borrarFormulario() {
  var nameInput = document.getElementById("exampleFormControlInput2");
  var emailInput = document.getElementById("id_reg_email");
  var subjectInput = document.getElementById("exampleFormControlTextarea1");

  nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";

  var successMessage = document.getElementById("successMessage");
  successMessage.classList.add("hidden");
}
