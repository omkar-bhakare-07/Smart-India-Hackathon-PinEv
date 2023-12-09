function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match a predefined value (for simplicity)
    if (username === 'user' && password === 'pass') {
        // Redirect to the options page
        window.location.href = 'options.html';
        return false;
    } else {
        alert('Invalid username or password');
        return false;
    }
}
