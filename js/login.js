document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'dipankar@gmail.com' && userPassword == '1234') {
        // console.log('vallid email');

        // anno html call korta
        window.location.href = 'banking.html';
    }
});