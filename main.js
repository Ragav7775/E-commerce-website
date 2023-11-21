

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*
const slides = document.querySelectorAll(".image-slides")
var counter = 0;
slide.forEach((slide, index) => { slide.style.right = `${index * 100}%` })
const prev = () => {
  counter--
  slideImage()
}
const next = () => {
  counter++
  slideImage()
}
const slideImage = () => {
  slides.forEach((slide)=>{slide.style.transform = `translateY(=${counter * 100}%)`})
}
*/

/*
const slides = document.getElementsByClassName("image-slides");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.right = `${index * 100}%`;
});

const prev = () => {
  counter--;
  slideImage();
};

const next = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${counter * 100}%)`;
  }
};
*/
/*
let slideIndex_highlights = 0;
let slides_1;

function startSlides() {
  slides_1 = document.querySelectorAll('.today-deal-container-images');
  showSlides_1();
}
function showSlides_1() {
  for (let i = 0; i < slides_1.length; i++) {
    slides_1[i].style.display = 'none';
  }
  slideIndex_highlights++;
  if (slideIndex_highlights > slides_1.length) {
    slideIndex_highlights = 1;
  }
  slides_1[slideIndex_highlights - 1].style.display = 'block';
  setTimeout(showSlides_1, 2000); // Change image every 2 seconds
}
function stopSlides() {
  clearTimeout(showSlides_1);
}
*/
/*
let slideIndexHighlights = 0;
let slidesHighlights;

function startSlides() {
    slidesHighlights = document.querySelectorAll('.today-deal-container-images');
    showSlidesHighlights();
}

function showSlidesHighlights() {
    for (let i = 0; i < slidesHighlights.length; i++) {
        slidesHighlights[i].style.display = 'none';
    }
    slideIndexHighlights++;
    if (slideIndexHighlights > slidesHighlights.length) {
        slideIndexHighlights = 1;
    }
    slidesHighlights[slideIndexHighlights - 1].style.display = 'block';
    setTimeout(showSlidesHighlights, 2000); // Change image every 2 seconds
}

function stopSlides() {
    clearTimeout(showSlidesHighlights);
}
*/
/*

$(".today-deal-container-images:gt(0)").hide();

setInterval(function() { 
  $('.today-deal-container-images:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('.today-deal-container-slideshow');
}, 3000);

*/


 /*

const videos = document.querySelectorAll('.today-deal-container-highlights-video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
*/

/*
$("img", "#gifs-rows").hover(function() {
  $('.preset-file').toggle();
  $('.gif-file').toggle();
});
*/

/*
const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function startSlideshow() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

function stopSlideshow() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = 0;
  images[currentImageIndex].classList.add('active');
}

const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseenter', () => {
  startSlideshow();
});

imageContainer.addEventListener('mouseleave', () => {
  stopSlideshow();
});
*/









///-----------------------------------------Slideshow---------------------------------------------///

function showMenu() {
    var menu = document.querySelector('.menu-container-listhover');
    menu.style.display = 'block';
}
function hideMenu() {
    var menu = document.querySelector('.menu-container-listhover');
    menu.style.display = 'none';
}

/////-------------------------------------Menu-Container-Show--------------------------------------//





const video = document.getElementById('youtube-video');
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });





