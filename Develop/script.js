// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var special = "!@#$%^&".split("")
var numbers = "123456789".split("")
//  Prompt instruction for the user to begin
window.onload = alert("Welcome! Please click 'Generate password' to start");
// Main Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// GIVEN I need a new, secure password
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
function passwordCriteria() {
  var userChoice = prompt("How long would you like your password? It must be between 8-128 characters")
  parseInt(userChoice)
  if (userChoice < 8 || userChoice > 128 || isNaN(userChoice)) {
    alert("password length must be between 8 and 128 characters")
    return
  }
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var wantsLowercase = confirm("password can include lowercase")
  var wantsUppercase = confirm("password can include uppercase")
  var wantsNumbers = confirm("password can include numbers")
  var wantsSpecial = confirm("password can include special characters")
  if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false) {
    alert("you must choose at least one option")
    return
  }
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  var passwordOptions = {
    length: userChoice,
    wantsLower: wantsLowercase,
    wantsUpper: wantsUppercase,
    wantsSpecial: wantsSpecial,
    wantsNumbers: wantsNumbers,

  }
  return passwordOptions
  // console.log(passwordOptions.length)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var options = ["lowerCase", "upperCase", "numbers", "special"];
function generatePassword() {
  var options = passwordCriteria()
  if (options.wantsUpper === true && options.wantsLower === true && options.wantsSpecial === true && options.wantsNumbers === true) {
  }

  // console.log(options.length)
  // check in this password function if they said yes to each generate password type. 4 individual if statements
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // pull from arrays they said yes to
}

  // GIVEN I need a new, secure password*
  // WHEN prompted for password criteria*
  // WHEN I click the button to generate a password*
 // THEN I am presented with a series of prompts for password criteria*
  // THEN I select which criteria to include in the password*
  // WHEN prompted for the length of the password*
// THEN I choose a length of at least 8 characters and no more than 128 characters*
// WHEN prompted for character types to include in the password*
// THEN I choose lowercase, uppercase, numeric, and/or special characters*
// WHEN I answer each prompt*
// THEN my input should be validated and at least one character type should be selected*
// WHEN all prompts are answered*
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
