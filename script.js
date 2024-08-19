let convertBtn = document.getElementById("convert-btn");
let number = document.getElementById("number");
let output = document.getElementById("output");

convertBtn.addEventListener("click", romanConverter)

function romanConverter() {
    output.classList.remove("hidden");
    if (number.value == "") {
        output.innerHTML = "Please enter a valid number";
        return;
    } else if (number.value < 1 || number.value > 3999) {
        output.innerHTML = number.value < 1 ? "Please enter a number greater than or equal to 1" : "Please enter a number less than or equal to 3999"
        return;
    }


    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let romanNumeral = "";

    for (let i = 0; i < romanValues.length; i++) {
        while (number.value >= romanValues[i]) {
            romanNumeral += romanSymbols[i];
            number.value -= romanValues[i];
        }
    }
    number.value = "";
    output.innerHTML = romanNumeral;
}
