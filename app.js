document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation logic
    if (username === 'admin' && password === 'password123') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
        // Redirect or perform another action here
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = 'red';
    }
});
