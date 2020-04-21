// Assignment code here
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPasswordOptions () {
    var length = parseInt(prompt("how long?"));

    if(isNaN(length) === true) {
        alert("Must be a number");
        return;
    }

    if(length < 8) {
        alert("Please make a password greater than eight characters.");
        return;
    }

    if(length > 128) {
        alert("Password must be shorter than 128 characters");
        return;
    }
    var hasLower = confirm("click ok for lowercase");

    var hasUpper = confirm("click for uppercase");

    var hasNumber = confirm("click okay for number");

    var hasSpecial = confirm("click for special characters");

    if(
        hasLower === false &&
        hasUpper === false &&
        hasNumber === false &&
        hasSpecial === false
    ) { 
        alert("Must select at least one type");
        return;
    }
    var passwordOptions = {
        length,
        hasLower,
        hasNumber,
        hasUpper,
        hasSpecial
    }
    return passwordOptions;
}
function getIndex(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var passwordDigit = arr[index];
    return passwordDigit;
}

function generatePassword () {
    var options = getPasswordOptions();
    console.log(options)
    var superArray = [];
    var result = [];

    if(options.hasLower) {
        superArray = superArray.concat(lowerArray);
        console.log(superArray)
    }
    if(options.hasUpper) {
        superArray = superArray.concat(upperArray);
        console.log(superArray)
    }
    if(options.hasNumber) {
        superArray = superArray.concat(numberArray);
        console.log(superArray)
    }
    if(options.hasSpecial) {
        superArray = superArray.concat(specialArray);
        console.log(superArray)
    }


    for(var i = 0; i < options.length; i++) {
        var possibleChar = getIndex(superArray);
        result.push(possibleChar);
        console.log(possibleChar)
    }
    console.log(result)
    return result.join("");
}


 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);