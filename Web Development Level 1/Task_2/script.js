function convertTemperature() {
  const input = parseFloat(document.getElementById("temperatureInput").value);
  const type = document.getElementById("typeSelect").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let resultText = "";

  switch (type) {
    case "celsius":
      resultText = `${(input * 9/5 + 32).toFixed(2)} °F | ${(input + 273.15).toFixed(2)} K`;
      break;
    case "fahrenheit":
      resultText = `${((input - 32) * 5/9).toFixed(2)} °C | ${(((input - 32) * 5/9) + 273.15).toFixed(2)} K`;
      break;
    case "kelvin":
      resultText = `${(input - 273.15).toFixed(2)} °C | ${((input - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      break;
    default:
      resultText = "Invalid conversion type.";
  }

  resultDiv.textContent = `Result: ${resultText}`;
}
