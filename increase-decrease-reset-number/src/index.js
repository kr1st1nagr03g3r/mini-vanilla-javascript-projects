// set initial count
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  // e stands for event to check which button the user clicked on.
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // if a variable contains a specific class, you'll know which one was clicked.
    if (styles.contains("decrease")) {
      // decrease count by one
      count--;
    } else if (styles.contains("increase")) {
      // increase count by one
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#50fa7b";
    }
    if (count < 0) {
      value.style.color = "#ff5555";
    }
    if (count === 0) {
      value.style.color = "ghostwhite";
    }
    value.textContent = count;
  });
});
