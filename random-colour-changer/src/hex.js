const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// # followed by six values, zero to nine. letters, A-F
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // set up a loop that will generate this hex colour, and will target the body, change the bg colour, and then add the value within the colour span
  let hexColor = "#";
  // create a loop that will have six values for the hex code
  // start at zero, run the loop until i is less than 6, then each time you run it, increment by one.
  for (let i = 0; i < 6; i++) {
    // for hexColor, in each iteration of the array, add a value from the array
    // The addition assignment (+=) operator adds the value of the right operand to a variable and assigns the result to the variable.
    hexColor += hex[getRandomNumber()];
  }
  // text content wil be the hex colour name
  color.textContent = hexColor;
  // the body background colour should use the value of the hex
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  // multiply by the length of the hex array, not the colours array.

  return Math.floor(Math.random() * hex.length);
}
