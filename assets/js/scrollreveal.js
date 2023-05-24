/* Mobile */
const square = document.querySelector('.square');
const topLeftRectangle = document.querySelector('.top-left');
const topRightRectangle = document.querySelector('.top-right');
const bottomLeftRectangle = document.querySelector('.bottom-left');
const bottomRightRectangle = document.querySelector('.bottom-right');

let isEffectActive = false;

function activateEffect() {
  if (window.innerWidth < 991) {
    if (!isEffectActive) {
      // Ativa o efeito apenas se não estiver ativo
      topLeftRectangle.style.display = 'block';
      topRightRectangle.style.display = 'block';
      bottomLeftRectangle.style.display = 'block';
      bottomRightRectangle.style.display = 'block';
      topLeftRectangle.style.transform = 'translateX(-400px)';
      topRightRectangle.style.transform = 'translateX(400px)';
      bottomLeftRectangle.style.transform = 'translateX(-400px)';
      bottomRightRectangle.style.transform = 'translateX(400px)';
      topLeftRectangle.style.transition = 'transform 0.8s ease-in-out';
      topRightRectangle.style.transition = 'transform 0.8s ease-in-out';
      bottomLeftRectangle.style.transition = 'transform 0.8s ease-in-out';
      bottomRightRectangle.style.transition = 'transform 0.8s ease-in-out';

      // Força um repaint antes de aplicar as transformações
      square.getBoundingClientRect();

      topLeftRectangle.style.transform = 'translateX(0)';
      topRightRectangle.style.transform = 'translateX(0)';
      bottomLeftRectangle.style.transform = 'translateX(0)';
      bottomRightRectangle.style.transform = 'translateX(0)';

      isEffectActive = true;
    } else {
      // Desativa o efeito apenas se estiver ativo
      topLeftRectangle.style.transform = 'translateX(-400px)';
      topRightRectangle.style.transform = 'translateX(400px)';
      bottomLeftRectangle.style.transform = 'translateX(-400px)';
      bottomRightRectangle.style.transform = 'translateX(400px)';
      setTimeout(function() {
        topLeftRectangle.style.display = 'none';
        topRightRectangle.style.display = 'none';
        bottomLeftRectangle.style.display = 'none';
        bottomRightRectangle.style.display = 'none';
        isEffectActive = false;
      }, 600);
    }
  }
}

square.addEventListener('click', activateEffect);
square.addEventListener('touchstart', activateEffect);

/* Desktop */
const commonOptions = {
  duration: 2200,
  easing: 'ease-in-out',
};

const revealOptionsLargeScreen = [
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".top-right", origin: "top", distance: "100px" },
  { selector: ".bottom-left", origin: "bottom", distance: "100px" },
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".bottom-right", origin: "right", distance: "100px" },
  { selector: ".square" },
];

const sr = ScrollReveal({ reset: true });

if (window.innerWidth >= 991) {
  revealOptionsLargeScreen.forEach((options) => {
    sr.reveal(options.selector, { ...commonOptions, ...options });
  });
}


window.addEventListener("load", function() {
  var redesDiv = document.querySelector(".redes");
  redesDiv.classList.add("fade-in");
});