// Get the email from the local storage
const userEmail = localStorage.getItem('userEmail');

// Display the email in the specified element
if (userEmail) {
  document.getElementById('user-email').textContent = `Logged in as: ${userEmail}`;
}
window.addEventListener('load', () => {
    var
      carousels = document.querySelectorAll('.carousel')
    ;
    
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
    });
    
    function carousel(root) {
    var
      figure = root.querySelector('figure'),
      nav = root.querySelector('nav'),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = 'bfc' in root.dataset,
      
      theta =  2 * Math.PI / n,
      currImage = 0
    ;
    
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => { 
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
    });
    rotateCarousel(currImage);
    setupNavigation();
    addImageHoverListeners();
    
    function setupCarousel(n, s) {
      var	
        apothem = s / (2 * Math.tan(Math.PI / n))
      ;
      
      figure.style.transformOrigin = `50% 50% ${- apothem}px`;
    
      for (var i = 0; i < n; i++)
        images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++)
           images[i].style.backfaceVisibility = 'hidden';
      
      rotateCarousel(currImage);
    }
    
    function setupNavigation() {
      nav.addEventListener('click', onClick, true);
      
      function onClick(e) {
        e.stopPropagation();
        
        var t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON')
          return;
        
        if (t.classList.contains('next')) {
          currImage++;
        }
        else {
          currImage--;
        }
        
        rotateCarousel(currImage);
      }
        
    }
    function addImageHoverListeners() {
      for (let i = 0; i < n; i++) {
        images[i].addEventListener('mouseover', () => zoomImage(i, 1.1));
        images[i].addEventListener('mouseout', () => zoomImage(i, 1));
      }
    }
    
    function zoomImage(imageIndex, scale) {
      const image = images[imageIndex];
      image.style.transform = `rotateY(${imageIndex * theta}rad) scale(${scale})`;
    }
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    
      // Add these lines to update the image name
      const imageNameElement = document.getElementById('image-name');
      const imageName = images[imageIndex % n].alt;
      imageNameElement.textContent = imageName;
    }
    
    }