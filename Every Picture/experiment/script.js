(function(){
    'use strict';
    console.log('JS');
  
    const overlay = document.querySelector('.overlay');
    const overlayImg = document.querySelector('#overlay-img');
    const overlayText = document.querySelector('#overlay-text');
    const closeBtn = document.querySelector('#close-btn');
  
    const thumb1 = document.querySelectorAll('.thumbnail')[0];
    const thumb2 = document.querySelectorAll('.thumbnail')[1];
  
    overlay.style.display = 'none';
  
    thumb1.addEventListener('click', function() {
      overlay.style.display = 'flex';
      overlayImg.src = 'images/IMG_6957.jpeg';
      overlayText.textContent = 'Text for first image';
    });
  
    thumb2.addEventListener('click', function() {
      overlay.style.display = 'flex';
      overlayImg.src = 'images/IMG_6959.jpeg';
      overlayText.textContent = 'Text for second image';
    });
  
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  })();
  