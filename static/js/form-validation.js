function validate() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const suggest = document.getElementById('suggest').value;

    //Name
    let error = false;
    if (name === "") {
        //console.log("Name is required");
        document.getElementById("name_error").innerHTML = "Name is Required";
        error = true;
    } else {
        document.getElementById("name_error").innerHTML = "";
    }

    //Mobile
    if (mobile === "") {
        document.getElementById("mobile_error").innerHTML = "Mobile number is Required";
        error = true;
    } else if (mobile.length < 10) {
        document.getElementById("mobile_error").innerHTML = "Phone number must be 10 characters long";
        error = true;

    } else {
        document.getElementById("mobile_error").innerHTML = "";
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

    //Suggest
    if (suggest === "") {
        document.getElementById("suggest_error").innerHTML = "Suggestion is Required";
        error = true;
    } else {
        document.getElementById("suggest_error").innerHTML = "";
    }


    if (error) {
        return false;
    } else {
        return true;
    }
}