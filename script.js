function changeGreeting() {
    const greeting = document.getElementById('greeting');
    if (greeting.textContent === 'Hello World') {
        greeting.textContent = '¡Hola Mundo!';
    } else {
        greeting.textContent = 'Hello World';
    }
}

// Cuenta atrás de 10 segundos
let countdown = 10;
const timerElement = document.getElementById('timer');
const interval = setInterval(() => {
    countdown--;
    if (timerElement) timerElement.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(interval);
        if (timerElement) timerElement.textContent = '¡Tiempo!';
    }
}, 1000);

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMsg.textContent = '¡Gracias por tu mensaje, ' + contactForm.nombre.value + '!';
        contactForm.reset();
        setTimeout(() => { formMsg.textContent = ''; }, 4000);
    });
}
