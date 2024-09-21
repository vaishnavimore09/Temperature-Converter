// //temperature converter



let isFahrenheit = true; // Default is Fahrenheit

// Function to switch between Fahrenheit and Celsius
function switchUnit() {
    isFahrenheit = !isFahrenheit; // Toggle the unit

    // Update the UI
    document.getElementById('farunit').textContent = isFahrenheit ? 'Fahrenheit' : 'Celsius';
    document.getElementById('celunit').textContent = isFahrenheit ? 'Celsius' : 'Fahrenheit';
    document.getElementById('TemperatureInput').placeholder = isFahrenheit ? 'Enter Fahrenheit value' : 'Enter Celsius value';
}

// Function to convert temperature
function convertTemperature(){ 
    let TemperatureInput = parseFloat(document.getElementById('TemperatureInput').value);
    let convertedTemperature;

    console.log(TemperatureInput);

    if (isNaN(TemperatureInput)) {
        document.getElementById('answer').textContent = "Please enter a valid Temperature.";
        return;
    }

    if (isFahrenheit) {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (TemperatureInput - 32) * 5 / 9;
        document.getElementById('answer').textContent = `${TemperatureInput}°F is equal to ${convertedTemperature.toFixed(2)}°C.`;
    } else {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (TemperatureInput * 9 / 5) + 32;
        document.getElementById('answer').textContent = `${TemperatureInput}°C is equal to ${convertedTemperature.toFixed(2)}°F.`;
    }

}
























// console.log(document)

// function celsiusToFahrenhiet()
// {
//   var temp = document.getElementById("tempInput").value;
//   document.getElementById("answer").innerText = temp * (9/5) + 32;
// }

// function switchUnit()
// {
//     var far = farunit;
//     var cel = celunit;

// }
   
    