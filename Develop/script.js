// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(criteria) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+][";
  
  var password = "";
  

  for(var i = 0; i < criteria.length; i++){
    var index = Math.random() * (chars.length - 1) + 0;
    randomChar = chars.charAt(index);
    password = password + randomChar;
  }

  //check criteria and ensure all are met

  //if lowercase is 'yes'

  //check each character to see if it is lowercase
    //if no lowercase letters restart loop and generate a new password

  //if uppercase is 'yes'

  //check each character to see if it is uppercase
    //if no uppercase letters restart loop and generate a new password
    
  
  //if numeric is 'yes'

  //check each character to see if it is numeric
    //if no numeric letters restart loop and generate a new password  

  //if special is 'yes'

  //check each character to see if it is special
    //if no numeric letters restart loop and generate a new password    


  return password;
} 

// Write password to the #password input
function writePassword() {
  window.alert("Password Criteria must include 8-128 characters and contain a lowercase, uppercase, special, or numeric character.");

  var isValidPassword = false;
  var criteria =  {
    lowercase: '',
    uppercase: '',
    special: '',
    numeric: '',
    length: 0
  };

  do {
    // ask for criteria
    do {
      var promptPasswordLowercase = window.prompt("Would you like to include a lowercase character? Enter 'Yes' or 'No' to continue.")
      promptPasswordLowercase = promptPasswordLowercase.toLowerCase();
    } while(promptPasswordLowercase !== "yes" && promptPasswordLowercase !== "no");
    criteria.lowercase = promptPasswordLowercase;

    do {
      var promptPasswordUppercase = window.prompt("Would you like to include an uppercase character? Enter 'Yes' or 'No' to continue.")
      promptPasswordUppercase = promptPasswordUppercase.toLowerCase();
    } while(promptPasswordUppercase !== "yes" && promptPasswordUppercase !== "no");
    criteria.uppercase = promptPasswordUppercase;

    do {
      var promptPasswordNumeric = window.prompt("Would you like to include a numeric character? Enter 'Yes' or 'No' to continue.")
      promptPasswordNumeric = promptPasswordNumeric.toLowerCase();
    } while(promptPasswordNumeric !== "yes" && promptPasswordNumeric !== "no");
    criteria.numeric = promptPasswordNumeric;

    do {
      var promptPasswordSpecial = window.prompt("Would you like to include a special character? Enter 'Yes' or 'No' to continue.")
      promptPasswordSpecial = promptPasswordSpecial.toLowerCase();
    } while(promptPasswordSpecial !== "yes" && promptPasswordSpecial !== "no");
    criteria.special = promptPasswordSpecial; 

    do {
      var promptPasswordLength = window.prompt("How long should the password be? Please choose a number between 8 and 128.")   
    } while (promptPasswordLength < 8 || promptPasswordLength > 128);
    criteria.length = promptPasswordLength;
  
    //Check if 1 of the 4 prompts is true and password length is between 8 and 128
    if((promptPasswordLowercase === 'yes' || promptPasswordUppercase === 'yes' || promptPasswordNumeric === 'yes' || promptPasswordSpecial === 'yes') && (promptPasswordLength >= 8 && promptPasswordLength <= 128))
    {
      //valid password
      isValidPassword = true;
    }
    else{
      window.alert("Password Criteria must include lowercase, uppercase, numeric, or special characters");
      //loop back to start
    }
  } while (isValidPassword === false);
  
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
