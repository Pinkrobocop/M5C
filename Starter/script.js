var confirmedUppercase;
var confirmedLowercase;
var confirmedNumber;
var enterVar;
var confirmedCharacter;

// Insert The Required Password Variable Values: 

// These are the Special characters used
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//  These Are The Numeric characters
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  These Are The Alphabetical characters Used
alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is used for the Uppercase conversion
space = [];
/* Choices will be declared outside the 'if' statement.
 This enabels concatenation with the allocated condition */
var choices;
// This will convert letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphabets2 = alphabets.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    nps = generatePassword();
    document.getElementById("new password").placeholder = nps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enterVar= parseInt(prompt("How many characters do you want in your new password? Choose any digit between 10-64"));
    // This 'if' statement for the user to provide their input 
    if (!enterVar) {
        alert("This needs a value");
    } else if (enterVar < 10 || enterVar > 64) {
        // Validates user input
        // Start user input prompts
        enterVar = parseInt(prompt("You must choose between 8-128"));

    } else {
        // Continues once user input is checked
        confirmedNumber = confirm("Will this input contain any numbers?");
        confirmedCharacter = confirm("Will this input contain any special characters?");
        confirmedUppercase = confirm("Will this input contain any Uppercase letters?");
        confirmedLowercase = confirm("Will this input contain any Lowercase letters?");
    };

    // Else if for 4 negative options
    // Else if for 2 positive options 
     if (confirmedCharacter && confirmedNumber) {
        choices = character.concat(numbers);

    } else if (confirmedCharacter && confirmedLowercase) {
        choices = character.concat(alphabets);

    } else if (confirmedCharacter && confirmedUppercase) {
        choices = character.concat(alphabets2);
    }
    else if (confirmedLowercase && confirmedNumber) {
        choices = alphabets.concat(numbers);

    } else if (confirmedLowercase && confirmedUppercase) {
        choices = alphabets.concat(alphabets2);

    } else if (confirmedNumber && confirmedUppercase) {
        choices = numbers.concat(alphabets2);
    }
    // Else if there is one other positive option
    else if (confirmedCharacter) {
        choices = character;
    }
    else if (confirmedNumber) {
        choices = numbers;
    }
    else if (confirmedLowercase) {
        choices = alphabets;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmedUppercase) {
        choices = space.concat(alphabets2);
    };

    // A new password variable has been made as an array placeholder for user generated amount of length
    var newpassword = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enterVar; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        newpassword.push(pickChoices);
    }
    // This joins the new password array and converts it to a string
    var nps = newpassword.join("");
    UserInput(nps);
    return nps;
}
// This puts the new password value into the textbox
// Changed function input to use textcontent
function UserInput(nps) {
    document.getElementById("new password").textContent = nps;

} 

