//using selectors inside the element

// traversing the dom

const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelector(".question-text");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
    console.log("click");
  });
});
