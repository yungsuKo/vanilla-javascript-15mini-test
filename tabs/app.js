const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other button
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other article
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {});
// });
