
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const messageInput = document.getElementById('msg');


// manejador de eventos para cuando se envíe el formulario
form.addEventListener('submit', function (event) {
if (!validateForm()) {
event.preventDefault(); // Evita que el formulario se envíe si no pasa la validación
}
});
// Función para validar el formulario
function validateForm() {
let isValid = true;
if (nameInput.value.trim() === '') {
alert('Por favor, ingresa tu nombre.');
isValid = false;
}
if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
alert('Por favor, ingresa una dirección de correo electrónico válida.');
isValid = false;
}
if (messageInput.value.trim() === '') {
alert('Por favor, ingresa un mensaje.');
isValid = false;
}
return isValid;
}
// validacion de una dirección de correo electrónico
function isValidEmail(email) {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}