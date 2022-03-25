export const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = celsius * (9 / 5) + 32;
    return Math.round(Number(fahrenheit));
};

export const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return Math.round(Number(celsius));
};