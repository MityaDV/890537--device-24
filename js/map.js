var info = document.querySelector(".contacts-actions-link");
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

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-open")) {
      map.classList.remove("modal-open");
    }
  }
});
