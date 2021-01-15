// set variables
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");

//  Prompt instructions for the user to start
window.onload = alert("Hello! Please click 'Generate password' to start");

// Main Function-write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;           
}

//password criteria
function passwordCriteria() {
  var userChoice = prompt("How long would you like your password? It must be between 8-128 characters")
  parseInt(userChoice)
  if (userChoice < 8 || userChoice > 128 || isNaN(userChoice)) {
    alert("Please try again, password length must be between 8 and 128 characters")
    return
  }
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var wantsLowercase = confirm("Do you want your password to include lowercase? 'Ok' for yes, 'Cancel' for no.")
  var wantsUppercase = confirm("Do you want your password to include uppercase? 'Ok' for yes, 'Cancel' for no.")
  var wantsNumbers = confirm("Do you want your password to include numbers? 'Ok' for yes, 'Cancel' for no.")
  var wantsSpecial = confirm("Do you want your password to include special characters? 'Ok' for yes, 'Cancel' for no.")
  if (wantsLowercase === false && wantsUppercase === false && wantsNumbers === false && wantsSpecial === false) {
    alert("Please try again. You must choose at least one option.")
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
  console.log(passwordOptions.length)
}

// Generate
generateBtn.addEventListener("click", writePassword);
var options = ["lowerCase", "upperCase", "numbers", "special"];

// 
function generatePassword() {
  var options = passwordCriteria()
  if (options.wantsUpper === true && options.wantsLower === true && options.wantsSpecial === true && options.wantsNumbers === true) {
  }

//   // console.log(options.length)
//   // check in this password function if they said yes to each generate password type. 4 individual if statements
//   // WHEN I answer each prompt
//   // THEN my input should be validated and at least one character type should be selected
//   // pull from arrays they said yes to
}


  // //using confirmed info and generating password 
  // else{
  //   for(var i =0; i<passwordCriteria; i++){
  //     var random = Math.floor(Math.random()*passwordCriteria.length);
  //   resultPass +=passwordCriteria[random]    
  // }

  // //display password
  // document.getElementById("password").innerHTML = resultPass;

 