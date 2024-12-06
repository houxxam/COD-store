
// Select all elements in the document
const allElements = document.querySelectorAll('*');

// Loop through each element and add the classes
allElements.forEach(element => {
  element.classList.add('ease-in-out', 'duration-300');
});


document.addEventListener("DOMContentLoaded", function () {
  // Create an intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add animation class when the element enters the viewport
              entry.target.classList.add('animate__animated', 'animate__fadeInRight');
              entry.target.style.opacity = '1'; // Ensure visibility

              // Unobserve after the animation is applied
              observer.unobserve(entry.target);
          } else {
              // Reverse the animation when the element leaves the viewport
              entry.target.classList.remove('animate__animated', 'animate__fadeInRight');
              entry.target.style.opacity = '0'; // Make it hidden
              entry.target.style.transform = 'translateX(100px)'; // Reset position
          }
      });
  }, {
      threshold: 0.5 // Trigger when 50% of the element is in view
  });

  // Select all product cards
  const productCards = document.querySelectorAll('.product-card');

  // Observe each product card
  productCards.forEach(card => {
      observer.observe(card);
  });
});

function toggleButtonVisibility() {
  // Get the button element
  const button = document.getElementById('back-top');
  
  // Show button when scrolling down, hide it when at the top
  if (window.scrollY > 100) { // When the user scrolls more than 100px down
    button.classList.remove('opacity-0', 'pointer-events-none');
    button.classList.add('opacity-100', 'pointer-events-auto');
  } else {
    button.classList.remove('opacity-100', 'pointer-events-auto');
    button.classList.add('opacity-0', 'pointer-events-none');
  }
}

// Call the function on page load to check the initial scroll position
toggleButtonVisibility();

// Listen for the scroll event to dynamically show/hide the button
window.addEventListener('scroll', toggleButtonVisibility);

// Listen for window resizing to dynamically update button visibility
window.addEventListener('resize', toggleButtonVisibility);


function addAnimationOnHoverLinks() {
  const links = document.querySelectorAll('a');
  
  links.forEach(element => {
    element.addEventListener('mousemove', () => {
      // Add animation class
      element.classList.add('animate__animated', 'animate__shakeX');
    });
    
    // Listen for the animation end event to remove the animation class
    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__shakeX');
    });
  });
}

addAnimationOnHoverLinks();


