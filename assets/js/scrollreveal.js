/*const commonOptions = {
  duration: 1200,
  easing: 'ease-in-out',
};

const revealOptions = [
  { selector: ".square" },
  { selector: ".top-left", origin: "left", distance: "200px" },
  { selector: ".top-right", origin: "right", distance: "200px" },
  { selector: ".bottom-left", origin: "left", distance: "200px" },
  { selector: ".bottom-right", origin: "right", distance: "200px" },
];

const revealOptionsLargeScreen = [
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".top-right", origin: "top", distance: "100px" },
  { selector: ".bottom-left", origin: "bottom", distance: "100px" },
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".bottom-right", origin: "right", distance: "100px" },
  { selector: ".square" },
];

ScrollReveal.default({ reset: true });

revealOptions.forEach((options) => {
  ScrollReveal().reveal(options.selector, { ...commonOptions, ...options });
});

if (window.innerWidth >= 991) {
  revealOptionsLargeScreen.forEach((options) => {
    ScrollReveal().reveal(options.selector, { ...commonOptions, ...options });
  });
}
*/

document.addEventListener("DOMContentLoaded", function () {
  const square = document.querySelector(".square");
  const rectangles = document.querySelectorAll(".rectangle");

  rectangles.forEach(rectangle => {
    rectangle.style.display = "none"; // Oculta as divs rectangle
  });

  square.addEventListener("click", function () {
    rectangles.forEach(rectangle => {
      rectangle.style.display = "flex"; // Torna as divs rectangle visíveis
    });

  });
});
