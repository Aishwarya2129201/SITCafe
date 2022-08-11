function validate() {
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    //First Name
    let error = false;
    if (first_name == "") {
        //console.log("Name is required");
        document.getElementById("first_name_error").innerHTML = "First Name is Required";
        error = true;
    } else {
        document.getElementById("first_name_error").innerHTML = "";
    }
    //Last Name
    if (last_name == "") {
        //console.log("Name is required");
        document.getElementById("last_name_error").innerHTML = "Last Name is Required";
        error = true;
    } else {
        document.getElementById("last_name_error").innerHTML = "";
    }
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


    //Email
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.');
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Email is Required";
        error = true;

    } else if (atPos <= 0 || dotPos <= 0 || (dotPos - atPos) <= 4 || dotPos == email.length - 1) {
        document.getElementById("email_error").innerHTML = "Please provide a valid email id";
        error = true;
    } else {
        document.getElementById("email_error").innerHTML = "";
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
    //confirm password
    if (password2 == "") {
        document.getElementById("password2_error").innerHTML = "Confirmation Required";
        error = true;

    } else if (password != password2) {
        document.getElementById("password2_error").innerHTML = "Confirm Password or password must be same";
        error = true;
    } else {
        document.getElementById("password2_error").innerHTML = "";
    }

    if (error) {
        return false;
    } else {
        return true;
    }
}