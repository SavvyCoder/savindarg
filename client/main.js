var slideIndex = 1;
var slides;
var contact;

window.onload = function() {
  slides = document.getElementsByClassName("mySlides");
  showSlides(slideIndex);
  contact = document.querySelector("#contact-form");
};

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function Success() {
  let successNode = document.createElement("h2");
  successNode.style.color = "orange";
  successNode.appendChild(document.createTextNode("Thanks for your time!"));
  contact.appendChild(successNode);
}

function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight) + "px";
}
