
document.querySelector('#menu-icon').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
};

document.querySelector('.theme-toggle').onclick = () => {
    document.body.classList.toggle('light-theme');
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    if (name && email && phone && message) {
        document.querySelector('.message-box').textContent = 'Your message has been sent successfully!';
        document.querySelector('.message-box').style.color = 'green';
    } else {
        document.querySelector('.message-box').textContent = 'Please fill in all fields.';
        document.querySelector('.message-box').style.color = 'red';
    }
});
