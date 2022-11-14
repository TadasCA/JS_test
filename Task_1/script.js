/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const kilogramsInput = document.getElementById("search");

document.querySelector("form").addEventListener("submit", convertKilogramsToOtherUnits);

  function convertKilogramsToOtherUnits(event) {
    event.preventDefault()
    const kilogramsInputValue = Number(kilogramsInput.value)
if (kilogramsInputValue) {
    const pounds = (kilogramsInputValue * 2.2046).toFixed(3);
    const grams = (kilogramsInputValue / 0.0010000).toFixed(3);
    const ounces = (kilogramsInputValue * 35.274).toFixed(3)
    output.innerText = "You entered that your weight is: " + kilogramsInputValue + " kg" + "\n1. Your weight in Pounds: " + pounds + " lb" + "\n2. Your weight in Grams: " + grams + " g" + "\n3. Your weight in Ounces: " + ounces + " oz";
    output.style.background = "white";
    output.style.width = "80%";
    output.style.margin = "5rem auto 0 auto";
    output.style.padding = "1 rem";
    output.style.borderRadius = "0.5 rem";
    output.style.textAlign = "center";
    output.style.color = "darkred";
}
    else {
        output.innerText = 'Illegal argument entered';
    }
}

