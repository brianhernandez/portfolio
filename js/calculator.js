// Get the calculator table, clear button, delete button, equal button
// and input elements and save them to their respective variables
var calculatorElement = document.querySelector(".calc_container");
var clearButtonElement = document.getElementById("clear");
var deleteButtonElement = document.getElementById("del");
var equalButtonElement = document.getElementById("equal");
var inputDisplayElement = document.getElementById("display");
// Create an empty string variable screenDisplayText and evaluatedFlag Boolean
// to hold the calculator button entries and whether or not an operation on
// the calculator was made
var screenDisplayText = "";
var evaluatedFlag = false;
// Add an event listener for a click event to the calculator table
calculatorElement.addEventListener('click', function(event) {
  // If the click was on the clear button element...
  if (event.target === clearButtonElement) {
    // ...set the screenDisplayText string to empty
    screenDisplayText = "";
    // and update the text input element on the calculator to this empty string
    updateScreenDisplayText(screenDisplayText);
    // ...else if the delete button was clicked...
  } else if (event.target === deleteButtonElement) {
    // set the screenDisplayText string to itself with the last character
    // removed
    screenDisplayText = screenDisplayText.substr(0,
      (screenDisplayText.length - 1));
    // and update the text input element on the calculator with this new string
    updateScreenDisplayText(screenDisplayText);
    // ...else if the click was on the equal button...
  } else if (event.target === equalButtonElement) {
    // If either the first or last character in the screenDisplayText string
    // is NOT a number...
    if (isNaN(parseInt(screenDisplayText[0])) ||
      isNaN(parseInt(screenDisplayText[screenDisplayText.length - 1]))) {
      // ...if the first character is not a decimal point...
      if (screenDisplayText[0] !== ".") {
        // ...alert that an operation can't be performed since symbols are at
        // the beginning or end of the input
        alert("This cannot be evaluated since your input begins or ends with" +
          " a math operator.");
        // ...else if the first character is a decimal AND greater than one
        // character length...
      } else if (screenDisplayText[0] === "." && screenDisplayText.length > 1) {
        // ...evaluate the screenDisplayText string using eval() function and
        // pass the result to updateScreenDisplayText() to update the text input
        updateScreenDisplayText(eval(screenDisplayText));
        // and set the evaluatedFlag to true
        evaluatedFlag = true;
        // ...else if the first character of the screenDisplayText string
        // is a decimal...
      } else if (screenDisplayText[0] === "." && screenDisplayText.length === 1) {
        // ...alert that more input is needed.
        alert("More input is required.");
      }
      // ...else...
    } else {
        // evaluate the screenDisplayText string with eval() and pass the result
        // to updateScreenDisplayText() to update the calculator input screen
        updateScreenDisplayText(eval(screenDisplayText));
        // and set the evaluatedFlag to true
        evaluatedFlag = true;
      }
    // ...else if any other button was clicked on...
  } else if (event.target.tagName === "BUTTON") {
    // If the evaluatedFlag is true because of a previous performed operation...
    if (evaluatedFlag) {
      // ...set the evaluatedFlag to false
      evaluatedFlag = false;
      // If the button that was clicked was an operator button...
      if ( event.target.value === "+" || event.target.value === "-" ||
        event.target.value === "/" || event.target.value === "*") {
        // ...set the screenDisplayText string to the current input element
        // display value
        screenDisplayText = inputDisplayElement.value;
        // ...else...
      } else {
        // ...reset the screenDisplayText to an empty string
        screenDisplayText = "";
        // and update the calculator text input to this empty string
        updateScreenDisplayText(screenDisplayText);
      }
    }
    // Set the screenDisplayText string to the value of the button that was
    // just clicked
    screenDisplayText += event.target.value;
    // Update the calculator input display to this new string
    updateScreenDisplayText(screenDisplayText);
  }
});
// The updateScreenDisplayText simply takes the input parameter and sets the
// text input value to this string parameter.
function updateScreenDisplayText(input) {
  inputDisplayElement.value = input;
}
