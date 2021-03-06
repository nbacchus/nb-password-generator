// Assignment code here

//Characters for password
var characterLength = 8;
var choiceArray =[];

var specialCharacters =['!','@','#','$','%','^','&','*','~'];
var lowerCharacters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCharacters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacters =['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function userPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters would you like the passwords to be? Please choose between 8-128 characters."));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    window.alert("Character length invalid");
    return false;
  }

  if (window.confirm("Would you like to include lowercase letters in the password?")) {
    choiceArray = choiceArray.concat(lowerCharacters);
  }

  if (window.confirm("Would you like to include uppercase letter in the password?")) {
    choiceArray = choiceArray.concat(upperCharacters);
  }

  if (window.confirm("Would you like to include numbers in the password?")) {
    choiceArray = choiceArray.concat(numberCharacters);
  }

  if (window.confirm("Would you like to include special characters in the password?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }

  if (choiceArray == "") {
    window.alert("Must choose at least one option. Please try again.");
    return userPrompts();
  }

  return true;
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = userPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
