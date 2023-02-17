var nombreCorrect = false;
var emailCorrect = false;
var claveCorrect = false;
var confirmeCorrect = false;


function validarNombre(event) {
    const nombreRe = /^[a-zA-ZñÑ]+$/;
    nombreCorrect = nombreRe.test(event.target.value)

    updateValid(event.target, nombreCorrect)
    updateHide(nombreCorrect, "icon-nombre-success", "icon-nombre-error")

    if (event.target.value.length === 0){
        updateMensajeDeError("nombre-error", "rellene este campo")
    } else if (!nombreCorrect){
        updateMensajeDeError("nombre-error", "nombre invalido")
    } else {
        updateMensajeDeError("nombre-error", "")
    }
}

function validarEmail(event) {
    const EmailRe = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    emailCorrect = EmailRe.test(event.target.value)

    updateValid(event.target, emailCorrect)
    updateHide(emailCorrect, "icon-email-success", "icon-email-error")
    if (event.target.value.length === 0){
        updateMensajeDeError("email-error", "rellene este campo")
    } else if (!emailCorrect){
        updateMensajeDeError("email-error", "email invalido")
    } else {
        updateMensajeDeError("email-error", "")
    }
}

var clave = "";
function validarClave(event) {
    claveCorrect = event.target.value.length >= 8
    clave = event.target.value

    updateValid(event.target, claveCorrect)
    updateHide(claveCorrect, "icon-clave-success", "icon-clave-error")
    if (event.target.value.length === 0){
        updateMensajeDeError("clave-error", "rellene este campo")
    } else if (!claveCorrect){
        updateMensajeDeError("clave-error", "clave invalida")
    } else {
        updateMensajeDeError("clave-error", "")
    }
}

function validarConfirme(event) {
    confirmeCorrect = clave === event.target.value

    updateValid(event.target, confirmeCorrect)
    updateHide(confirmeCorrect, "icon-confirme-success", "icon-confirme-error")
    if (event.target.value.length === 0){
        updateMensajeDeError("confirme-error", "rellene este campo")
    } else if (!confirmeCorrect){
        updateMensajeDeError("confirme-error", "las claves no coinciden")
    } else {
        updateMensajeDeError("confirme-error", "")
    }
}

function updateValid(element, isValid) {
    if (isValid) {
        element.classList.remove("error")
        element.classList.add("valid")
    } else {
        element.classList.add("error")
        element.classList.remove("valid")
    }
}

function updateHide(isValid, successId, errorId){
    successElement = document.getElementById(successId);
    errorElement = document.getElementById(errorId);
    if (isValid){
        successElement.classList.remove("hidden");
        errorElement.classList.add("hidden");
    } else {
        successElement.classList.add("hidden");
        errorElement.classList.remove("hidden");
    }
}

function updateMensajeDeError(elementId, mensaje){
    element = document.getElementById(elementId);
    element.innerHTML = mensaje
}

function submitForm(){
    if (nombreCorrect && emailCorrect && claveCorrect && confirmeCorrect){
        window.alert("Formulario completado")
    }
}