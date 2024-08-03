document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'ganzostore' && password === '12345678') {
            window.location.href = '../index.html';
        } else {
            alert('Username atau password salah!');
        }
    });
});
