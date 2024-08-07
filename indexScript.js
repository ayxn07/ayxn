function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Ayxn07' && password === 'Mommy') {
        window.location.href = 'menu.html';
    } else {
        alert('Invalid username or password');
    }
}
