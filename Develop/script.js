// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var options = ["lowercase", "uppercase", "numbers", "specialcharacters";]

// GIVEN I need a new, secure password
// WHEN prompted for password criteria
fuction generatePassword(){
  var passwordLength = alert["password length must be between 8 and 128 characters"]
  var lowercase = confirm["password can include lowercase"]
  var upppercase = confirm["password can include uppercase"]
  var numbers = confirm["password can include numbers"]
  var specialcharacters = confirm["password can include special characters"]
}
// WHEN I click the button to generate a password
window.alert("Please select desired password criteria")
// THEN I am presented with a series of prompts for password criteria
var userChoice = window.promt(options)

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
window.alert("please choose the desired password length")
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
