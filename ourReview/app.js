const reviews = [
  {
    id: 1,
    name: "tom",
    job: "web developer",
    img: "./example1.png",
    text: "asoidfjvpxcovnadfoibokas[dogjew",
  },
  {
    id: 2,
    name: "2222",
    job: "web developer2",
    img: "./example2.png",
    text: "22222222222222",
  },
];

const personImg = document.getElementById("personImg");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

const handlePrevBtn = () => {
  currentItem += 1;
  console.log(currentItem);
};

window.addEventListener("DOMContentLoaded", function () {
  console.log("shake and bake");
  const item = reviews[currentItem];
  console.log(personImg);
  console.log(author);
  personImg.src = item.img;
});
