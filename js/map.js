var info = document.getElementById(["js-actions-map"]);
var map = document.querySelector(".modal-map");
var close = map.querySelector(".modal-close");

info.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-open");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-open");
});

document.addEventListener("keyup", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-open")) {
      map.classList.remove("modal-open");
    }
  }
});
