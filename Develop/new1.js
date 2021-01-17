// Start working code
// variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start Password variable
character = "!@#$%^&".split("");
number = "123456789".split("");
alpha = "abcdefghijklmnopqrstuvwxyz".split("");
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

window.onload = alert("Hello! Please click 'Generate password' to start");

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user password length
    enter = parseInt(prompt("How long would you like your password? It must be between 8-128 characters"));
    if (!enter) {
        alert("Please try again, password length must be between 8 and 128 characters");
    } else if (enter < 8 || enter > 128) {
        // Start user input prompts
        enter = parseInt(prompt("How long would you like your password? It must be between 8-128 characters"));

    } else {

        //user is promted to answer password criteria
        confirmNumber = confirm("Do you want your password to include numbers? 'Ok' for yes, 'Cancel' for no.");
        confirmCharacter = confirm("Do you want your password to include special characters? 'Ok' for yes, 'Cancel' for no.");
        confirmUppercase = confirm("Do you want your password to include uppercase? 'Ok' for yes, 'Cancel' for no.");
        confirmLowercase = confirm("Do you want your password to include lowercase? 'Ok' for yes, 'Cancel' for no.");
    };

    //if user chooses all negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        alert("Please try again. You must choose at least one option.")
        choices = alert();

    }
    // 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);
    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);
    }
    else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);
    }
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // array placeholder for users password length
    var password = [];

    // random choices variables:
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


