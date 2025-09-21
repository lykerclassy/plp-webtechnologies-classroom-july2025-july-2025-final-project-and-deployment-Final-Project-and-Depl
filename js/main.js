// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name && email && message){
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        } else {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
        }
    });
}
