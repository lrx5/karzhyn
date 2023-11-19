const hamburger= document.querySelector(".hamburger");
const navsmallmenu = document.querySelector('.navsmallmenu');

hamburger.addEventListener('click', (e)=> {
    navsmallmenu.classList.toggle('navsmallmenushow');
});


document.addEventListener('DOMContentLoaded', function() {
    // Assuming your form has an ID of 'myForm'
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Initialize EmailJS with your user ID
        emailjs.init('WOK_dh9lO9rbUCjN0');
        
        // Send the email using EmailJS
        emailjs.sendForm('service_5yslqtc', 'template_10x7ix8', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Redirect to thank_you.html after a successful submission
                window.location.href = 'thank_you.html';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
    const images = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log('Entry:', entry); // Log the intersection entry
            if (entry.isIntersecting) {
                entry.target.classList.toggle('fade-in');
                entry.target.classList.toggle('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed
    
    images.forEach(image => {
        observer.observe(image);
    });
});
