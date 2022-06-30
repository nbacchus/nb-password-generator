// Assignment code here

//Characters for password
var characterLength = 8;
var choiceArray =[];

var specialCharacters =['!','@','#','$','%','^','&','*','~'];
var lowerCharacters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCharacter =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberCharacters =['1','2','3','4','5','6','7','8','9','0',];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters would you like the passwords to be? Please choose between 8-128 characters."));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length invalid");
    return false;
  }

  if (confirm("Would you like to include uppercase letters in the password?")) {
    choiceArray = choiceArray.lowerCharacters;
  }

  if (confirm("Would you like to include lowercase letter in the password?")) {
    choiceArray = choiceArray.upperCharacters;
  }

  if (confirm("Would you like to include numbers in the password?")) {
    choiceArray = choiceArray.numberCharacters;
  }

  if (confirm("Would you like to include special characters in the password?")) {
    choiceArray.specialCharacters;
  }

  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
