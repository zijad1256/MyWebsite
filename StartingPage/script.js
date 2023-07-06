var welcomeButton = document.querySelector('.welcome-button');
var loginForm = document.querySelector('.login-form');
var registerForm = document.querySelector('.register-form');
var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');
var password = document.getElementById('registerPassword');
var confirmPassword = document.getElementById('registerConfirmPassword');
var passwordMatchSymbol = document.getElementById('passwordMatchSymbol');

registerLink.addEventListener('click', function() {
  loginForm.style.opacity = '0';
  loginForm.style.transform = 'scaleY(0)';
  setTimeout(function() {
    loginForm.classList.add('hidden');
    registerForm.style.opacity = '1';
    registerForm.style.transform = 'scaleY(1)';
    registerForm.classList.remove('hidden');
  }, 300);
});

loginLink.addEventListener('click', function() {
  registerForm.style.opacity = '0';
  registerForm.style.transform = 'scaleY(0)';
  setTimeout(function() {
    registerForm.classList.add('hidden');
    loginForm.style.opacity = '1';
    loginForm.style.transform = 'scaleY(1)';
    loginForm.classList.remove('hidden');
  }, 300);
});

welcomeButton.addEventListener('click', function() {
  welcomeButton.style.opacity = '0';
  welcomeButton.style.height = '0';
  welcomeButton.style.padding = '0';

  setTimeout(function() {
    welcomeButton.classList.add('hidden');
    loginForm.style.opacity = '1';
    loginForm.style.transform = 'scaleY(1)';
    loginForm.classList.remove('hidden');
  }, 300);
});

var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function() {
  var username = document.getElementById('loginUsername').value;
  var passwordValue = document.getElementById('loginPassword').value;

  // Perform authentication checks
  if (username === 'admin' && passwordValue === 'password') {
    alert('Login successful! Welcome, ' + username + '.');
    // Redirect to the rest of the website or perform other actions
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

password.addEventListener('input', function() {
  validatePasswordConfirmation();
});

confirmPassword.addEventListener('input', function() {
  validatePasswordConfirmation();
});

function validatePasswordConfirmation() {
  var passwordValue = password.value;
  var confirmPasswordValue = confirmPassword.value;

  if (passwordValue === confirmPasswordValue) {
    password.classList.add('match');
    confirmPassword.classList.add('match');
    password.classList.remove('mismatch');
    confirmPassword.classList.remove('mismatch');
  } else {
    password.classList.remove('match');
    confirmPassword.classList.remove('match');
    password.classList.add('mismatch');
    confirmPassword.classList.add('mismatch');
  }
}
