import 'airbnb-js-shims/target/es2015';
import 'airbnb-browser-shims/browser-only';
import 'airbnb-browser-shims';




// Toggle between Login and Register forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Toggle visibility
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

// Login form validation
function loginValidation(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Please fill in all fields.');
        return false;
    }

    // You can add more advanced validation or API call here
    
    alert('Login Successful!');
    return true;
}

// Register form validation
function registerValidation(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // You can add more advanced validation or API call here
    
    alert('Registration Successful!');
    return true;
}
