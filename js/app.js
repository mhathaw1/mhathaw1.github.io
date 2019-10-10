var slideIndex = 1;
showSlides(slideIndex);

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var nav = document.getElementById('access_nav'),
	    body = document.body;

	nav.addEventListener('click', function(e) {
		body.className = body.className? '' : 'with_nav';
		e.preventDefault();
  });
  
// Modal can be opened
function addModalEventListeners() {

  const modalTriggerElement = document.querySelector('a', '.button');

  const modalTriggerClickHandler = function() {
    document.body.classList.add('modal-open');
  };

  modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

  // Modal can be closed
  const modalCloseButton = document.querySelector('#modal button');

  const modalCloseButtonClickHandler = function() {
    document.body.classList.remove('modal-open');
  };

  modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
}