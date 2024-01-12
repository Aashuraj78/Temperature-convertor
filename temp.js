function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        resultElement.textContent = temperature + " Celsius is equal to " +
            ((temperature * 9/5) + 32).toFixed(2) + " Fahrenheit and " +
            (temperature + 273.15).toFixed(2) + " Kelvin.";
    } else if (unit === "fahrenheit") {
        resultElement.textContent = temperature + " Fahrenheit is equal to " +
            ((temperature - 32) * 5/9).toFixed(2) + " Celsius and " +
            (((temperature - 32) * 5/9) + 273.15).toFixed(2) + " Kelvin.";
    } else if (unit === "kelvin") {
        resultElement.textContent = temperature + " Kelvin is equal to " +
            (temperature - 273.15).toFixed(2) + " Celsius and " +
            (((temperature - 273.15) * 9/5) + 32).toFixed(2) + " Fahrenheit.";
    }
}