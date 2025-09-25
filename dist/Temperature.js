import promptSync from "prompt-sync";
const prompt = promptSync();
const temperatureConverter = () => {
    // Convert Celsius to Fahrenheit using formula F = (C * 9/5) + 32
    const Celsius = parseFloat(prompt("Enter temperature in Celsius: "));
    if (isNaN(Celsius)) {
        console.log("Invalid input. Enter temperature in Celsius");
        return;
    }
    const Fahrenheit = (Celsius * 9 / 5) + 32;
    console.log(`${Celsius}°C is ${Fahrenheit.toFixed(2)}°F`);
};
temperatureConverter();
