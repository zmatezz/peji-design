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

