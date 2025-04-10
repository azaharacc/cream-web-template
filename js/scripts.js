/* ----------------------------------------- SLIDER 1 -----------------------------------------*/
function initSlider() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let slideInterval;

  // If slider does not exist, exit
  if (slides.length === 0) {
    console.error("No se encontraron slides. Asegúrate de que el slider está en el DOM.");
    return;
  }
 
  function showSlides() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === slideIndex);
    });
  }
// Show the current slide and hide the others
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
  }
  
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlides();
    startSlideShow();
  }

  // Add event listeners to the dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
  });

  // Start slider
  showSlides();
  startSlideShow();
}

/* ----------------------------------------- SLIDER 2 -----------------------------------------*/

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slider-two-images-container .slide-two-images');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Go to last slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Go to the first slide
  }
  // Update slider position and arrows
  const newTransformValue = `translateX(-${currentIndex * 100}%)`;
  document.querySelector('.slider-two-images').style.transform = newTransformValue;
  updateArrowsVisibility();
}
// Show or hide arrows based on the current index
function updateArrowsVisibility() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelectorAll('.slide-two-images');

  prevButton.classList.toggle('hidden', currentIndex === 0);
  nextButton.classList.toggle('hidden', currentIndex === slides.length - 1);
}


/* ------------------------------- OPEN IMG FULL / CLOSE WITH X --------------------------------*/
function openFullscreen(img) {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  const fullscreenImage = document.getElementById('fullscreen-image');
  // Assign the image source to the fullscreen image
  fullscreenImage.src = img.src;
  fullscreenContainer.classList.add('active');
  // Add click event to close the fullscreen image
  fullscreenContainer.addEventListener('click', function (event) {
    // Verifica si el clic no fue en la imagen
    if (event.target !== fullscreenImage) {
      closeFullscreen();
    }
  });
}
// Close the fullscreen image when the close button is clicked
function closeFullscreen() {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  fullscreenContainer.classList.remove('active');
}


/* ----------------------------------------- POP UP -----------------------------------------*/

function initPopup() {
  // Get the elements
  const contactBtn = document.getElementById('contact-btn');
  const popup = document.getElementById('contact-popup');
  const closeBtn = document.getElementById('close-btn');
  // Check if elements exist
  if (contactBtn && popup && closeBtn) {
    // Show the popup when the button is clicked
    contactBtn.addEventListener('click', function () {
      popup.style.display = 'block';
    });
    // Close popup
    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
}
