var buttons = document.querySelectorAll(".slider-button-list .slider-button");
var slides = document.querySelectorAll(".slider-list .slider-item");
var slideActive;

var toggleSlides = function(current) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider-item-active");
  }
  current.classList.add("slider-item-active");
};

var onButtonClick = function() {
  slideActive = document.getElementById(this.dataset.slide);
  toggleSlides(slideActive);
};

	for (var i = 0; i < buttons.length; i++) {
  	buttons[i].addEventListener("click", onButtonClick);
  	buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("slider-button-active");
    current[0].className = current[0].className.replace(" slider-button-active", "");
    this.className += " slider-button-active";
  });
}	

