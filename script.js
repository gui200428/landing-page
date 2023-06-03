function debounce(func, wait = 10) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    };
  }
  
  function slideElements() {
    const slideElements = document.querySelectorAll('.slide');
    slideElements.forEach(element => {
      const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
      const elementBottom = element.offsetTop + element.offsetHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
  
      if (isHalfShown && isNotScrolledPast) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', debounce(slideElements));
  

  window.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  function fadeInElements() {
    fadeElements.forEach(function(element, index) {
      setTimeout(function() {
        element.style.opacity = 1;
      }, index * 200); // Ajuste o valor do atraso entre cada item (em milissegundos)
    });
  }

  fadeInElements();
});
