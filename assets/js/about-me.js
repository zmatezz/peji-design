let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

$(document).ready(function() {
  var startX = 0;
  var scrollLeft = 0;
  var isDragging = false;

  $(".container-projetos").on("mousedown", function(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  }).on("mousemove", function(e) {
    if (isDragging) {
      var moveX = e.pageX - $(this).offset().left - startX;
      $(this).scrollLeft(scrollLeft - moveX);
    }
  }).on("mouseup mouseleave", function() {
    isDragging = false;
  }).on("wheel", function(e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY || e.originalEvent.wheelDelta;
    $(this).scrollLeft($(this).scrollLeft() + delta);
  });
});

// header.scroll
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY > 100)
}
)

// read
var readButtons = document.querySelectorAll('.read');
var boxes = document.querySelectorAll('.box');
var paragraphs = document.querySelectorAll('.box p');
var originalTexts = Array.from(paragraphs).map(p => p.textContent);
var newTexts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
];

readButtons.forEach(function(readButton, index) {
  readButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (boxes[index].classList.contains('flip-animation')) {
      boxes[index].classList.remove('flip-animation');
      paragraphs[index].textContent = originalTexts[index];
      readButton.textContent = 'Leia mais';
    } else {
      boxes[index].classList.add('flip-animation');
      paragraphs[index].textContent = newTexts[index];
      readButton.textContent = 'Ler menos';
    }
  });
});
