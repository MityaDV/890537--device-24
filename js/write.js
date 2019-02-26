var contacts = document.querySelector(".btn-contacts");
var letter = document.querySelector(".modal-letter");
var close = letter.querySelector(".modal-close");
var form = letter.querySelector(".letter-form");
var login = letter.querySelector("[name=login-user]");
var email = letter.querySelector("[name=email-user]");
var text = letter.querySelector("[name=letter-user]");
var isStorageSupport = true;
var storage = "";
var storageEmail = "";

try {
  storage = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


contacts.addEventListener("click", function(evt) {
  evt.preventDefault();
  letter.classList.add("modal-open");
  if (storage) {
    login.value = storage;
    email.value = storageEmail;
    text.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  letter.classList.remove("modal-open");
  letter.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !text.value) {
    letter.classList.remove("modal-error");
    letter.offsetWidth = letter.offsetWidth;
    letter.classList.add("modal-error");
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (letter.classList.contains("modal-open")) {
      letter.classList.remove("modal-open");
      letter.classList.remove("modal-error");
    }
  }
});
