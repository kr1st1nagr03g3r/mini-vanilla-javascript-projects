// local reviews data
const reviews = [
  {
    id: 1,
    name: "Fernanda Fox",
    job: "CFO",
    img: "https://media.giphy.com/media/2yyFRo3JBTWJu0T2V2/giphy.gif",
    text:
      "Just because our currency is fish, it doesn't make it any less marketable."
  },
  {
    id: 2,
    name: "Samuel Seal",
    job: "Product Developer",
    img: "https://media.giphy.com/media/13WgZodd4J3mvK/giphy.gif",
    text:
      "I feel like the bigger the animal, the more they want fish. Don't try to give them carrots, they won't eat them."
  },
  {
    id: 3,
    name: "Penelope Penguin",
    job: "Intern",
    img: "https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif",
    text:
      "If you walk quickly with purpose, people will always think you're busy."
  },
  {
    id: 4,
    name: "Peter Polarbear",
    job: "CEO",
    img: "https://media.giphy.com/media/TH7HVTRK6UvZ92VfNq/giphy.gif",
    text: "I prefer cod to salmon, and I will not settle for less."
  }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  // if we are at the last item of the array, assign it to zero
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  // if we are at the last item of the array, assign it to zero
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
