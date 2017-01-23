//set base variables for temp types
var celsiusTemp;
var fahrenheitTemp;
var result = document.getElementById("result");
// set vars for buttons
var button = document.getElementById("converter");
var reload = document.getElementById("clear");

// determines what conversion function to use
// based on radio button selection
function determineConverter (clickEvent) {
  //debugger
  // set vars for radio button
  var fahrRadio = document.getElementById("fahrenheit");
  var celsRadio = document.getElementById("celsius");
  //converts to Celsius if selected
  if (fahrRadio.checked === true) {
    toFahrenheit();
  }
  //converts to Celsius if selected
  else if (celsRadio.checked === true) {
    toCelsius();
  }
  // produce dialog box if nothing is checked
  else {
    alert("Please choose a temperature!")
  }
}

//converts from celsius to Farenheit
function toFahrenheit () {
  //debugger
  var temperature = parseFloat(document.getElementById("temperature").value);
  //console.log(temperature);
  fahrenheitTemp = (temperature * 9 / 5) + 32;
  //round temp to whole number
  fahrenheitTemp = Math.round(fahrenheitTemp);
  //console.log(fahrenheitTemp);
  result.innerHTML += fahrenheitTemp + " degrees Fahrenheit!";
  addColor();
}

//converts from Fahrenheit to celsius
function toCelsius () {
  //debugger
  var temperature = parseFloat(document.getElementById("temperature").value);
  //console.log(temperature);
  celsiusTemp = (temperature - 32) * 5 / 9;
  //round temp to whole number
  celsiusTemp = Math.round(celsiusTemp);
  //console.log(celsiusTemp);
  result.innerHTML += celsiusTemp + " degrees Celsius!";
  addColor();
}


//function that clears the page with clear button
function clear () {
  window.location.reload()
};


// Assign a function to be executed when the convert button is clicked
button.addEventListener("click", determineConverter);
// Assign a function to be executed when the clear button is clicked
reload.addEventListener("click", clear);

//adds color based on converted value
function addColor () {
  //debugger
  // If the temperature is greater than 90F/32C the color of the converted temperature should be red.  
  if (celsiusTemp>32 || fahrenheitTemp>90) {
    result.style.color = "red";
  // If the temperature is greater than 90F/32C the color of the converted temperature should be red.
  } else if (celsiusTemp<0 || fahrenheitTemp<32) {
    result.style.color = "lightblue";
  // All other temperatures will return green.
  } else {
    result.style.color = "green";
  }

}


//Trigger event when 'enter' is pushed in text input
document.getElementById("temperature").onkeypress=function(tomato){
    if(tomato.keyCode === 13){
        tomato.preventDefault();
        var pressedEnter = document.getElementById("converter").click();
    }
}