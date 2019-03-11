var buttons = document.querySelectorAll(".slider-button-list .slider-button");
var slides = document.querySelectorAll(".slider-list .slider-item");
var slideActive;
var servicesButton = document.querySelectorAll(".services-item .btn-services");
var servicesContent = document.querySelectorAll(".services-content .services-column");
var servicesActive;


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

var toggleContent = function(current) {
	for (var i = 0; i < servicesContent.length; i++) {
		servicesContent[i].classList.remove("services-active");
	}
	current.classList.add("services-active");
};

var onBtnClick = function() {
	servicesActive = document.getElementById(this.dataset.services);
	toggleContent(servicesActive);
};

for (var i = 0; i < servicesButton.length; i++) {
	servicesButton[i].addEventListener("click", onBtnClick);
	servicesButton[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		servicesButton[i].focus();
		var current = document.getElementsByClassName("services-active");
		current[0].className = current[0].className.replace(" services-active", "");
		this.className += " services-active";
	});
}
