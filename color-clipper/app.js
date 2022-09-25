const colors = ["green", "red", "rgba(133,122,200)", "#f1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0-3
  console.log(document.querySelector("main"));
  const randomNumber = getRandomNumber(colors);
  console.log(randomNumber);
  document.querySelector("main").style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(color) {
  return Math.floor(Math.random() * color.length);
}
