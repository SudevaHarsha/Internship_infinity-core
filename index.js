const questions = document.querySelectorAll('.faq_question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('active');
    });
});

/* let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.pagination span');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlides(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', function () {
    const pagination = document.querySelector('.pagination');
    const slides = document.querySelectorAll('.slides img');

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', function () {
            showSlides(i);
        });
        pagination.appendChild(dot);
    }

    showSlides(0);

    setInterval(function () {
        changeSlide(1);
    }, 3000); // Change image every 3 seconds (3000ms)
});
 */

/* const slider = document.querySelector('.testimonial_swiper');
const paginationItems = document.querySelectorAll('.pagination-item');

let currentIndex = 0;
const slideWidth = document.querySelector('.testimonial_slider-1').offsetWidth;

paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    goToSlide(index);
    currentIndex=index;
  });
});

function goToSlide(index) {
    currentIndex = index;
    const translateValue = -slideWidth * currentIndex;
    if(window.innerWidth < 1200) {
      translateValue= -window.innerWidth * currentIndex;
    }
    slider.style.transition = 'transform 0.5s ease'; 
    slider.style.transform = `translateX(${translateValue}px)`;
  
    paginationItems.forEach(item => {
      item.classList.remove('active');
    });
    paginationItems[currentIndex].classList.add('active');
  }

function autoSlide() {
  setInterval(() => {
    if (currentIndex === paginationItems.length - 2) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }, 3000); // Change this value to adjust the auto-scroll speed
}

autoSlide(); */

const slider = document.querySelector('.testimonial_swiper');
const paginationItems = document.querySelectorAll('.pagination-item');

let currentIndex = 0;
let slideWidth = document.querySelector('.testimonial_slider-1').offsetWidth;

paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    goToSlide(index);
    currentIndex = index; // Updated currentIndex assignment
  });
});

function goToSlide(index) {
  currentIndex = index;
  let translateValue = -slideWidth * currentIndex;
  if (window.innerWidth < 1200) {
    translateValue = -window.innerWidth * currentIndex;
  }
  console.log(translateValue);
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${translateValue}px)`;

  paginationItems.forEach(item => {
    item.classList.remove('active');
  });
  paginationItems[currentIndex].classList.add('active');
}

function autoSlide() {
  let interval = setInterval(() => {
    if (currentIndex === paginationItems.length - 2) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    goToSlide(currentIndex);
  }, 3000); // Change this value to adjust the auto-scroll speed

  // Clear the interval when the user interacts with the slider
  slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });

  // Restart autoSlide when the user stops interacting with the slider
  slider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      if (currentIndex === paginationItems.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      goToSlide(currentIndex);
    }, 3000);
  });
}

autoSlide();


/* const slider1 = document.querySelector('.testimonial_swiper');
const paginationItems1 = document.querySelectorAll('.pagination-item');

let currentIndex1 = 0;
let slideWidth1 = document.querySelector('.testimonial_slider-2').offsetWidth;

paginationItems1.forEach((item, index) => {
  item.addEventListener('click', () => {
    goToSlide1(index);
    currentIndex1 = index; // Updated currentIndex assignment
  });
});

function goToSlide1(index) {
  currentIndex1 = index;
  let translateValue = -slideWidth1 * currentIndex1;
 
  console.log(translateValue);
  slider1.style.transition = 'transform 0.5s ease';
  slider1.style.transform = `translateX(${translateValue}px)`;

  paginationItems1.forEach(item => {
    item.classList.remove('active');
  });
  paginationItems[currentIndex1].classList.add('active');
}

function autoSlide1() {
  let interval = setInterval(() => {
    if (currentIndex1 === paginationItems1.length - 1) {
      currentIndex1 = 0;
    } else {
      currentIndex1++;
    }
    goToSlide1(currentIndex1);
  }, 3000); // Change this value to adjust the auto-scroll speed

  // Clear the interval when the user interacts with the slider
  slider1.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });

  // Restart autoSlide when the user stops interacting with the slider
  slider1.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      if (currentIndex1 === paginationItems1.length - 1) {
        currentIndex1 = 0;
      } else {
        currentIndex1++;
      }
      goToSlide1(currentIndex);
    }, 3000);
  });
}

autoSlide1();
 */

var scrollTrigger = document.getElementById('scroll-trigger');

    // Function to handle scroll event
    function handleScroll() {
      var scrollPosition = window.scrollY || window.pageYOffset;

      // Adjust the value 300 as needed for the scroll trigger point
      if (scrollPosition > 300) {
        scrollTrigger.style.visibility = 'visible';
      } else {
        scrollTrigger.style.visibility = 'hidden';
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

