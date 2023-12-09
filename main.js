

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
  var big_list_container = document.querySelector('.menu-container-listhover')
  big_list_container.style.display='block'
}
function hideMenu() {
  var big_list_container = document.querySelector('.menu-container-listhover')
  big_list_container.style.display='none'
}
/////-------------------------------------Menu-Container-Show--------------------------------------//









// new Glider(document.querySelector('.category-slideshow-container'), {
//   slidesToScroll: 1,
//   slidesToShow: 5.5,
//   draggable: true,
//   dots: '.category-slideshow-container-dots',
//   arrows: {
//     prev: '.category-slideshow-container-prev',
//     next: '.category-slideshow-container-next'
//   }
// });





// document.querySelector('.category-slideshow-container').addEventListener('.category-slideshow-container', function(event){
//   var imgs_to_anticipate = 3;
//   var glider = Glider(this);
//   for (var i = 0; i <= imgs_to_anticipate; ++i){
//     var index = Math.min(event.detail.slide + i, glider.slides.length - 1),
//       glider = glider;
//     loadImages.call(glider.slides[index],function(){
//       glider.refresh(true);
//     })
//   }
// });

// function loadImages(callback){
//   [].forEach.call(this.querySelectorAll('img'),function(img){
//     var _img = new Image,  _src = img.getAttribute('data-src');
//     _img.onload = function(){
//       img.src = _src;
//       img.classList.add('loaded');
//       callback && callback(img);
//     }
//     if(img.src !== _src)	_img.src = _src;
//   });
// }


// let slideIndex_2 = 0;
// showSlide_2(slideIndex_2);

// function changeSlide(n) {
//   showSlide_2(slideIndex_2 += n);
// }
// function showSlide_2(n) {
//   let slides_2 = document.querySelector(".category-products-container");
//   if (n >= slides_2.length) { slideIndex_2 = 0; }
//   if (n < 0) { slideIndex_2 = slides_2.length - 1; }
//   for (let i = 0; i < slides_2.length; i++) {
//     slides_2[i].style.display = "none";
//   }
//   slides_2[slideIndex_2].style.display = "block";
// }


// let currentIndex = 0;
// const slides_3 = document.querySelector('.category-products');

// function changeSlide(n) {
//   const slidesWidth = document.querySelector('.category-products-container').offsetWidth;
//   const maxIndex = document.querySelectorAll('.category-products-container').length;

//   currentIndex = (currentIndex + n) % maxIndex;
//   if (currentIndex < 0) {
//     currentIndex = maxIndex - 1;
//   }

//   const position = -slidesWidth * currentIndex;
//   slides_3.style.transform = `translateX(${position}px)`;
// }


// var slideIndex_2 = 1;
// showSlides_2(slideIndex_2);
// function plusSlides(n) {
//   showSlides_2(slideIndex_2 += n);
// }
// function currentSlide_2(n) {
//   showSlides_2(slideIndex_2 = n);
// }
// function showSlides_2(n) {
//   var a;
//   var slides_2 = document.getElementsByClassName("category-products-container");
//   var dots_2 = document.getElementsByClassName("category-slideshow-container-dot");
//   if (n > slides_2.length) {
//     slideIndex_2 = 1;
//   }
//   if (n < 1) {
//     slideIndex_2 = slides_2.length;
//   }
//   for (a = 0; a < slides_2.length; a++) {
//     slides_2[a].style.display = "none";
//   }
//   for (a = 0; a < dots_2.length; a++) {
//     dots_2[a].className = dots_2[a].className.replace(" active", "");
//   }
//   slides_2[slideIndex_2 - 1].style.display = "block";
//   dots_2[slideIndex_2 - 1].className += " active";
// }




// var img = document.getElementById('features-img');

// var slides=['featured-brand-img-1.gif','featured-brand-img-2.gif', 'featured-brand-img-3.gif','featured-brand-img-4.gif', 'featured-brand-img-5.gif', 'featured-brand-img-6.gif', 'featured-brand-img-7.gif','featured-brand-img-8.gif','featured-brand-img-9.gif','featured-brand-img-10.gif','featured-brand-img-11.gif','featured-brand-img-12.gif'];

// var Start=0;

// function slider(){
//     if(Start<slides.length){
//         Start=Start+1;
//     }
//     else{
//         Start=1;
//     }
//     console.log(img);
//     img.innerHTML = "<img src="+slides[Start-1]+">";
   
// }
// setInterval(slider,2000);
