document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('phonenumberError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const username = document.getElementById('userid').value;
    const phonenumber = document.getElementById('phoneid').value; // Corrected ID
    const email = document.getElementById('emailid').value;
    const password = document.getElementById('passwordid').value;

    const usernameregex = /^[a-zA-Z0-9]{3,15}$/;
    const phonenumberregex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
    const emailregex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const passwordregex = /^[a-zA-Z0-9]{6,}$/;

    let valid = true;

    if (!usernameregex.test(username)) {
        document.getElementById('usernameError').textContent = 'Username should have letters and numbers only.';
        valid = false;
    }
    if (!phonenumberregex.test(phonenumber)) { // Corrected test method
        document.getElementById('phonenumberError').textContent = 'Please enter a 10 digit number.';
        valid = false;
    }
    if (!emailregex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }
    if (!passwordregex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must have at least 6 characters, letters and numbers.';
        valid = false;
    }

    if (valid) {
        alert('Signup successful');
    }
});
