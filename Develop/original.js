// set variables for password
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");

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
    wantsLower: true,
    wantsUpper: true,
    wantsSpecial: true,
    wantsNumbers: true,
  }
  
  return passwordOptions
  console.log(passwordOptions.length);
}

// Generate the users password

generateBtn.addEventListener("click", writePassword);
var options = ["lowerCase", "upperCase", "numbers", "special"];

function generatePassword() {
  var options = passwordCriteria();

  if (options.wantsUppercase) {
    console.log("going to use uppercase");
    generatePassword = generatePassword.concat(wantsUppercase);
    console.log(options.length);
  }
  if (options.wantsLowercase) {
    console.log("going to use lowercase");
    generatePassword = generatePassword.concat(wantsLowercase);
    console.log(options.length);
  }
  if (options.wantsNumbers) {
    console.log("going to use numbers");
    generatePassword = generatePassword.concat(wantsNumbers);
    console.log(options.length);
  }
  if (options.wantsSpecial) {
    console.log("going to use special");
    generatePassword = generatePassword.concat(wantsSpecial);
    console.log(options.length);
  }
// else{
//   for(var i =0; i<passwordCriteria; i++){
//     var random = Math.floor(Math.random()*passwordCriteria.length);
//   resultPass +=passwordCriteria[random]    
// }

  // Possible last statement??
  //   var generatePassword = function (){
  //   var results = [] 
  //   for (var randomNumber = Math.floor()* generatePassword.length);
  //   results.push(generatePassword[randomNumber]);
  //  }
  //  return results.join("");

}
// //using confirmed info and generating password
// else{
//   for(var i =0; i<passwordCriteria; i++){
//     var random = Math.floor(Math.random()*passwordCriteria.length);
//   resultPass +=passwordCriteria[random]    
// }

// check in this password function if they said yes to each generate password type. 4 individual if statements

// //display password
// document.getElementById("password").innerHTML = resultPass;
// © 2021 GitHub, Inc.