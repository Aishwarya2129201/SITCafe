function validate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Username
    if (username == "") {
        document.getElementById("username_error").innerHTML = "SIC Number is Required";
        error = true;
    } else if (username.length < 9) {
        document.getElementById("username_error").innerHTML = "SIC must be 9 characters long";
        error = true;

    } else {
        document.getElementById("username_error").innerHTML = "";
    }

    //password

    if (password == "") {
        document.getElementById("password_error").innerHTML = "Password is Required";
        error = true;

    } else if (password.length < 8 || password.length > 16) {
        document.getElementById("password_error").innerHTML = "Please must be between 8-16 characters long";
        error = true;
    } else if (!password.match(/[A-Z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a uppercase character";
        error = true;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a lowercase character";
        error = true;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a digit";
        error = true;
    } else if (!password.match(/[!@#$%^&*]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a special character";
        error = true;
    } else {
        document.getElementById("password_error").innerHTML = "";
    }

    if (error) {
        return false;
    } else {
        return true;
    }
}