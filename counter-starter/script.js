function add(value) { 
    let numberElement = document.getElementById("number")
    let number = parseInt(numberElement.innerText);
    number = number + value;
    numberElement.innerText = number;
}

function subtract(value) {
    let numberElement = document.getElementById("number")
    let number = parseInt(numberElement.innerText);
    number = number - value;
    numberElement.innerText = number;
}

function reset(value) {
    let numberElement = document.getElementById("number")
    let number = parseInt(numberElement.innerText);
    number = 0
    numberElement.innerText = number;
}

function emoji(value) {
    let numberElement = document.getElementById("number")
    let number = parseInt(numberElement.innerText);
    if (number > 10) {
        console.log()
    }
}