// Assignment code here
var characterLengeth = 8;
var choiceArr = [];

var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '[', ']', '{', '}', '<', '>', '?', '|', '/',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j;', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
   var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
  
    passwordText.value = password;
  } else {
    passwordText.value = "";

  }
}

function generatePassword() {
  var password = "";
  for (let i = 0; i < characterLengeth; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLengeth = parseInt(prompt("How many characters do you want your password to be? (8-12)"));

  if (isNaN(characterLengeth) || characterLengeth < 8 || characterLengeth > 12) {
    alert("Character length has to be a number between 8-12. Please try again,");
    return false;
  };

  if (confirm("Would you like upperase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  };

  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  };
  
  if (confirm("Would you like symbols in your password?")) {
    choiceArr = choiceArr.concat(symbols);
  };
  return true;
}