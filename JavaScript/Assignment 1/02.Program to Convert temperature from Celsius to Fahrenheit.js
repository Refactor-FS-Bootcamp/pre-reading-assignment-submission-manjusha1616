//Program to Convert temperature from Celsius to Fahrenheit

function CelsiusToFahrenheit(celsius)
{
    return (celsius * (9/5)+32);
}

let temp = CelsiusToFahrenheit(29);
console.log(`Temprature Converted Celsius To Fahreinheit = ${temp}`);