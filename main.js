let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

// Hide all images
function reset() {
   for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none';
   }
}

// Initialize Slider
function startSlide() {
   reset();
   sliderImages[0].style.display = 'block';
}

// Show previous image
function slideLeft() {
   reset();
   sliderImages[current - 1].style.display = 'block';
   current--;
}

// Show next image
function slideRight() {
   reset();
   sliderImages[current + 1].style.display = 'block';
   current++;
}

// Left arrow event listner
arrowLeft.addEventListener('click', function() {
   if (current === 0) {
      current = sliderImages.length;
   }
   slideLeft();
});

// Right arrow event listner
arrowRight.addEventListener('click', function() {
   if (current === sliderImages.length - 1) {
      current = -1;
   }
   slideRight();
});

// Call initialzer function
startSlide();