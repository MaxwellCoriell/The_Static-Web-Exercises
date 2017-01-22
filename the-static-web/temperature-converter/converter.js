//setting base variables
var tempFahrenheit;
var tempCelcius;
var x = document.getElementById("converted_temperature");
var inputTemperature = document.getElementById("temperature"); //value from input box

//convert temp to Fahrenheit
//
//
function toFahrenheit () {	

	tempFahrenheit = ((inputTemperature * 9) / 5) - 32; 
	//convert equation
	
	tempFahrenheit = tempFahrenheit.toFixed(0); 
	//equation converts to whole numbers
	
	function colorTemperature(){
	x.innerhtml = "The temperature in Fahrenheit is " + tempFahrenheit;
	}; //display temperature in fahrenheit

};

//convert temp to Celsius
//
//
function toCelsius () {

	tempCelcius = ((inputTemperature -32) * 5) / 9; //equation only converts to whole numbers
	tempCelcius = tempCelcius.toFixed(0); // equation converts to whole number 

	function colorTemperature(){
	x.innerhtml = "The temperature in Celsius is " + tempCelcius;
	}; //display temperature in Celcius
};

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter());


// This function should determine which conversion should
//happen based on which radio button is selected.
function determineConverter () {
  if (document.getElementById("fahrenheit").checked === true) {
  	toFahrenheit();
  }else if (document.getElementById("celsius").checked === true) {  
  	toCelsius();	
  }else
  	alert("Please Select \"Farenheit\" or \"Celcius\" to convert");
};

// temperature > 90F/32C make it red
// temperature < 32F/0C make it blue
// else it is green
function colorTemperature() {
	if (tempFahrenheit > 90 || tempCelcius > 32)
		x.style.color = "red";
	else if (tempFahrenheit < 32 || tempCelcius < 0)
		x.style.color = "blue";
	else
		x.style.color = "green";
};

// Add an event handler to the input field that checks if the user pressed the enter key, 
// and if that happens, perform the conversion.
// var tempInput = document.getElementById("inputTemperature");
// tempImput.addEventListener("keypressed", pressed);
// function pressed(potato) {
//		if (potato.keycode === 13) {
//			document.getElementById("submit").click();
//		}
//
//	}
//
