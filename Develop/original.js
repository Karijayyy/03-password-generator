// set variables for password
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");
var possibleCharacters = []
var garenteedCharacters = []
var result = []

//event listener
generateBtn.addEventListener("click", writePassword);
var options = ["lowerCase", "upperCase", "numbers", "special"];

// function to generate random password
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]
  return randomElement
}

getRandom(upperCase)

getRandom(lowerCase)

getRandom(special)

getRandom(numbers)




//  Prompt instructions on pop up box for the user to start
window.onload = alert("Hello! Please click 'Generate password' to start");

// Main Function-write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//password criteria - asking how long users wants password
function passwordCriteria() {
  var userChoice = prompt("How long would you like your password? It must be between 8-128 characters")
  parseInt(userChoice)
  if (userChoice < 8 || userChoice > 128 || isNaN(userChoice)) {
    alert("Please try again, password length must be between 8 and 128 characters")
    return
  }

  //user is promted to answer password criteria
  var wantsLowercase = confirm("Do you want your password to include lowercase? 'Ok' for yes, 'Cancel' for no.")
  var wantsUppercase = confirm("Do you want your password to include uppercase? 'Ok' for yes, 'Cancel' for no.")
  var wantsNumbers = confirm("Do you want your password to include numbers? 'Ok' for yes, 'Cancel' for no.")
  var wantsSpecial = confirm("Do you want your password to include special characters? 'Ok' for yes, 'Cancel' for no.")
  if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false) {
    alert("Please try again. You must choose at least one option.")
    return
  }

  // users choices are stored here
  var passwordOptions = {
    length: userChoice,
    wantsLower: wantsLowercase,
    wantsUpper: wantsUppercase,
    wantsSpecial: wantsSpecial,
    wantsNumbers: wantsNumbers,
  }
  console.log(passwordOptions)
}

function generatePassword() {
  var options = passwordCriteria();

}
