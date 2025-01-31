function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let allChars = "";
    if (includeUppercase) allChars += upperChars;
    if (includeLowercase) allChars += lowerChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
    
    if (allChars === "" || length < 8) {
        document.getElementById('password').innerText = "Please select options and set length >= 8";
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    document.getElementById('password').innerText = password;
}

function copyPassword() {
    const passwordText = document.getElementById('password').innerText;
    if (passwordText && passwordText !== "Your password will appear here") {
        navigator.clipboard.writeText(passwordText);
        alert("Password copied to clipboard!");
    }
}