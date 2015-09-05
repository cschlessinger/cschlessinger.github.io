// Pseudocode:

// Concatenate .innerHTML of button click to string that represents the full, multi-digit number stored as the first argument
// Store arithmetic function to be applied when = is pressed
// Concatenate .innerHTML of button click to string that represents the full, multi-digit number stored as the second argument
// Use = to execute stored arithmetic function with stored arguments
// Update screen output with result

// config, (global variables)
var value = ""
var operator = null
var initialOperand = value;
var subsequentOperand = value;

// model
  function sum(a, b) {
    value = a+b;
  }

  function subtract(a, b) {
    value = a-b;
  }

  function multiply(a, b) {
    value = a*b;
  }

  function divide(a, b) {
    value = a/b;
  }

  
  function clearValue() {
    value = "";
  }

function concatNumInputs(button) {
  value += button.innerHTML
//   console.log(input)
}

// controller
$('.num').on('click', function() { 
  var button = this;
  concatNumInputs(button);
  displayNumOnScreen();
});

$('#clearButton').on('click', function() { 
  clearValue();
  displayNumOnScreen();
});

$('.func').on('click', function() {
    var initialOperand = value;
    var subsequentOperand = value;
})

$('#equalsButton').on('click', function() {
  switch ($(".func").innerHTML) {
    case "+":
    	console.log("debugger")
        sum(initialOperand, subsequentOperand);
        break;
    case "-":
        subtract(initialOperand, subsequentOperand);
        break;
    case "/":
        divide(initialOperand, subsequentOperand);
        break;   
    case "*":
        multiply(initialOperand, subsequentOperand);
        break; 
    default:
        displayNumOnScreen();
    }
})  

// view
function displayNumOnScreen() {
  $("#screen")[0].innerHTML = value;
}