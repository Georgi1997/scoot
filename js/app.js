//navbar responsive

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar__nav");
const overlay = document.querySelector(".overlay");

const responsiveNav = () => {
  burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");
    burger.classList.toggle("triggerAnim");
    overlay.classList.toggle("overlay-active");
  });
};

responsiveNav();

//FAQ ACCORDION SECTION

const headingClick = document.querySelectorAll(
  ".faq__container--qa-dropdown .heading-4"
);
const chevron = document.querySelectorAll(
  ".faq__container--qa-dropdown .heading-4 i"
);

const text = document.querySelectorAll(
  ".faq__container--qa-dropdown .paragraph-main"
);

const toggleFaq = () => {
  headingClick.forEach((el, i, arr) => {
    el.addEventListener("click", () => {
      text[i].classList.toggle("textActive");
      chevron[i].classList.toggle("rotate");
    });
  });
};

toggleFaq();
