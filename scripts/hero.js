document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-img');
    let current = 0;
  
    function showNextImage() {
      images.forEach(img => img.classList.remove('active'));
      
      images[current].classList.add('active');
      
      current = (current + 1) % images.length;
    }
  
    images[current].classList.add('active');
    
    setInterval(showNextImage, 3000);
  });