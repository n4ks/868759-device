var feedbackButton = document.querySelector(".feedback-button");

var feedbackPopup = document.querySelector(".modal-feedback");

var feedbackClose = feedbackPopup.querySelector(".modal-close");

var nameField = feedbackPopup.querySelector("[name=name]");
var email = feedbackPopup.querySelector("[name=email]");
var feedbackText = feedbackPopup.querySelector("[name=feedback-text]");

var form = feedbackPopup.querySelector("form");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  nameField.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !email.value || !feedbackText.value) {
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
  evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains("modal-show")) {
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });

  var mapLink = document.querySelector(".map-link");
  
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });