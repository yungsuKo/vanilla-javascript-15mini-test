const hex = [
  0,
  1,
  2,
  3,
  4,
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0-3
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * hex.length);
    console.log(x);
    hexColor += hex[x];
  }
  color.textContent = hexColor;
  document.querySelector("main").style.backgroundColor = hexColor;
});
