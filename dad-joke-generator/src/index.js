const jokeElement = document.getElementById("joke");
const getJoke = document.getElementById("getJoke");

getJoke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // call the icanhaz API
  const jokeResult = await fetch("https://icanhazdadjoke.com/", {
    // pass in the API headers
    headers: {
      Accept: "application/json"
    }
  });
  const joke = await jokeResult.json();

  // set the new joke
  jokeElement.innerHTML = joke.joke;
}
