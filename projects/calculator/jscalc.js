

var fullCalcNum = "";

function sum(a, b) {
	return a+b;
}
function subtract(a, b) {
	return a-b;
}
function multiply(a, b) {
	return a*b;
}
function divide(a, b) {
	return a/b;
}



function createMultiDigitNumbers() {
	var input = document.getElementsByClassName("numButton").innerHTML;
	fullCalcNum += input;
}

document.getElementById("screen").innerHTML = fullCalcNum;

// if document.getElementsByClassName("funcButton")[0]
// 	multiply()