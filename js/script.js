var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");

var userName = feedbackPopup.querySelector("[name=user-name]");
var email = feedbackPopup.querySelector("[name=email]");
var feedbackText = feedbackPopup.querySelector("[name=feedback-text]");
var form = feedbackPopup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  userName.style.backgroundColor = "";
  email.style.backgroundColor = "";
  feedbackText.style.backgroundColor = "";
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    if (!userName.value) {
      userName.style.backgroundColor = "#edb5b5";
    } else {
      userName.style.backgroundColor = "";
    }
    if (!email.value) {
      email.style.backgroundColor = "#edb5b5";
    } else {
      email.style.backgroundColor = "";
    }
    if (!feedbackText.value) {
      feedbackText.style.background = "#edb5b5";
    } else {
      feedbackText.style.backgroundColor = "";
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value)
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
      userName.style.backgroundColor = "";
      email.style.backgroundColor = "";
      feedbackText.style.backgroundColor = "";
    }
  }
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
