  /*
  let slide1;
  let slide2;
  let isSlide1Visible = true;
  
  setInterval(() => {
    slide1 = document.createElement('div');
    slide1.textContent = 'Slide 1';
    slide2 = document.createElement('div');
    slide2.textContent = 'Slide 2';
  
    slide1.style.display = isSlide1Visible ? 'block' : 'none';
    slide2.style.display = !isSlide1Visible ? 'block' : 'none';
  
    console.log('slide1:', slide1);
    console.log('slide2:', slide2);
  
    document.body.appendChild(slide1);
    document.body.appendChild(slide2);
  
    isSlide1Visible = !isSlide1Visible;
  }, 1000);
  */
  const slideshowContainer = document.getElementById("slideshow");
  const slides = Array.from(slideshowContainer.getElementsByTagName("img")); // Get all images
  
  // Hide all slides except the first one
  slides.forEach((slide, index) => {
      if (index !== 0) slide.classList.add("hidden");
  });
  
  setInterval(() => {
      // Find the currently visible slide
      const currentSlide = slides.find(slide => !slide.classList.contains("hidden"));
      const currentIndex = slides.indexOf(currentSlide);
  
      // Hide the current slide
      currentSlide.classList.add("hidden");
  
      // Show the next slide
      const nextIndex = (currentIndex + 1) % slides.length;
      slides[nextIndex].classList.remove("hidden");
  }, 2500);
  