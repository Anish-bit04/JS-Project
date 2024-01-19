function generatePassword() {
    var passwordLength = document.getElementById("passwordLength").value;

    if (passwordLength < 4 || passwordLength > 20) {
        alert("Password length must be between 4 and 20 characters.");
        return;
    }

    var charset = "";
    
    if (document.getElementById("uppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
        charset += "0123456789";
    }
    if (document.getElementById("symbols").checked) {
        charset += "!@#$%^&*()_-+=";
    }

    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

