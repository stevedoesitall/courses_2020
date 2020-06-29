let fahrenheit = 273;

const convertToCelsius = function(temp) {
    return (temp - 32) * 5/9;
};

let tempOne = convertToCelsius(fahrenheit);

console.log(tempOne);