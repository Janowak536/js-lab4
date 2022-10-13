const addNewInput = document.getElementById("addNewInput");
const calculate = document.getElementById("calculate");
var liveValues = document.getElementsByTagName("input");
const box = document.getElementById("box");
var inputNum = 4;
let sum = 0;
let average = 0;
let max = 0;
let min = 0;
const p = document.createElement("p");
var numberArray = [];
var liveNumberArray = [];

addNewInput.addEventListener("click", () => {
    inputNum = inputNum + 1;

    const newInput = document.createElement("input");
    box.appendChild(newInput);
    newInput.setAttribute("id", "input" + inputNum);
    newInput.setAttribute("class", "deleteInput" + inputNum);

    const newDeleteButton = document.createElement("button");
    box.appendChild(newDeleteButton);
    newDeleteButton.setAttribute("id", "deleteInput" + inputNum);
    newDeleteButton.textContent = "Usuń";

    liveValues = liveValues + document.getElementsByTagName("input");
});

const buttonsId = document.getElementsByTagName("button");
var buttonId = 0;

const buttonPressed = (id) => {
    buttonId = id.target.id;
    const buttonToDelete = document.getElementById(buttonId);
    const inpustToDelete = document.getElementsByClassName(buttonId);
    var requierdElement = inpustToDelete[0];

    if (buttonToDelete?.innerHTML == "Usuń") {
        requierdElement?.remove();
        buttonToDelete?.remove();
    }
};
for (let btn of buttonsId) {
    btn.addEventListener("click", buttonPressed);
}

calculate.addEventListener("click", () => {
    p.remove();
    const inputs = document.getElementsByTagName("input");
    for (let num of inputs) {
        if (num.value == "") {
            num.value = 0;
        }
        numberArray.push(num.value);
        sum = sum + parseInt(num.value);
    }
    average = sum / inputs.length;
    max = numberArray.reduce((a, b) => {
        return Math.max(a, b);
    });
    min = numberArray.reduce((a, b) => {
        return Math.min(a, b);
    });

    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.appendChild(p);
    p.innerHTML =
        "Suma = " + sum + ", " + "Średnia = " + average + ", " + "Max = " + max + ", " + "Min = " + min;

    sum = 0;
    average = 0;
    numberArray = [];
});



for (let liveValue of liveValues) {
    liveValue.addEventListener("change", () => {
        p.remove();
        const inputs = document.getElementsByTagName("input");

        for (let num of inputs) {
            if (num.value == "") {
                num.value = 0;
            }
            numberArray.push(num.value);
            sum = sum + parseInt(num.value);
        }

        average = sum / inputs.length;

        max = numberArray.reduce((a, b) => {
            return Math.max(a, b);
        });
        min = numberArray.reduce((a, b) => {
            return Math.min(a, b);
        });

        const newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.appendChild(p);
        p.innerHTML =
            "Suma = " + sum + ", " + "Średnia = " + average + ", " + "Max = " + max + ", " + "Min = " + min;
        sum = 0;
        average = 0;
        numberArray = [];
    });
}