// value is the argument that contains the specific number we wish to update the number with the mathematical operation.
function add(value) {
  // Giving the number element an ID number for further access
  let numberElement = document.getElementById("number");
  // Using innerText property to access text in the element. Convert type of number variable from string to integer.
  let number = parseInt(numberElement.innerText);
  // Adding number to be displayed by the specified value
  number = number + value;
  // Assigning text in number element to show the updated number
  numberElement.innerText = number;
}

// value is the argument that contains the specific number we wish to update the number with the mathematical operation.
function subtract(value) {
  // Giving the number element an ID number for further access
  let numberElement = document.getElementById("number");
  // Using innerText property to access text in the element. Convert type of number variable from string to integer.
  let number = parseInt(numberElement.innerText);
  // Subtracting number to be displayed by the specified value
  number = number - value;
  // Assigning text in number element to show the updated number
  numberElement.innerText = number;
}

// value is the argument that contains the specific number we wish to update the number with the mathematical operation.
function reset(value) {
  // Giving the number element an ID number for further access
  let numberElement = document.getElementById("number");
  // Using innerText property to access text in the element. Convert type of number variable from string to integer.
  let number = parseInt(numberElement.innerText);
  // Reassigning value to number
  number = 0;
  // Assigning text in number element to show the updated number
  numberElement.innerText = number;
}
