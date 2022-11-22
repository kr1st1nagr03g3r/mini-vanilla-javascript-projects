const colors = [
  "#282a36",
  "#44475a",
  "#f8f8f2",
  "#6272a4",
  "#8be9fd",
  "#50fa7b",
  "#ffb86c",
  "#ff79c6",
  "#bd93f9",
  "#ff5555",
  "#f1fa8c"
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 and 3 colors[0]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
// function to get random number
function getRandomNumber() {
  // use floor to round down to the closest integer (always down)
  return Math.floor(Math.random() * colors.length);
}

// function makeAccessible() {
//   if ((document.body.style.backgroundColor = colors[1])) {
//     color.textContent = colors[2];
//   }
// }
// console.log(colors[1]);
