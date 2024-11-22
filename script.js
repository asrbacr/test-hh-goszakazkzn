// const widthPage = window.screen.availWidth;
if (window.screen.availWidth < 1025) {
  const newsEl = document.querySelector(".fixed");
  newsEl.classList.remove("col-3");
  newsEl.classList.add("col");

  const formWrap = document.querySelector(".form__email");
  formWrap.classList.add("col");
}

const burgerCheck = document.querySelector('.burger-checkbox');
const burgerEl = document.querySelector('.menu-list');
console.log(burgerCheck);
console.log(burgerEl);
burgerCheck.addEventListener('click', function (e) {
    burgerEl.element === 'none' ? "grid" : "none";
});

if (window.screen.availWidth < 321) {
  const newsEls = document.querySelectorAll(".news__elem");
  newsEls.forEach((el) => {
    el.classList.remove("col");
  });

  const col4 = document.querySelectorAll(".col-4");
  col4.forEach((el) => {
    el.classList.remove("col-4");
    el.classList.add("col");
  });


}
