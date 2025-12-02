(function() {
    'use strict';
  
    const frames = [
      document.getElementById('f1'),
      document.getElementById('f2'),
      document.getElementById('f3')
    ];
  
    const containers = document.querySelectorAll('.container');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.getElementById('close-btn');
  
    for (let i = 0; i < frames.length; i++) {
      frames[i].style.display = 'none';
    }
    for (let i = 0; i < containers.length; i++) {
      containers[i].style.display = 'none';
    }
    overlay.style.display = 'none';
  
    frames[0].style.display = 'block';
  
    let currentFrame = 0;
    const totalFrames = frames.length;
    const frameHeight = window.innerHeight / totalFrames;
    let lastY = window.innerHeight;
  
    window.addEventListener('mousemove', function(e) {
      const currentMouseY = e.clientY;
  
      if (currentFrame >= totalFrames - 1) return;
  
      if (currentMouseY < lastY) {
        const nextFrameThreshold = window.innerHeight - frameHeight * (currentFrame + 1);
  
        if (currentMouseY <= nextFrameThreshold) {
          frames[currentFrame].style.display = 'none';
          currentFrame++;
          frames[currentFrame].style.display = 'block';
  
          if (currentFrame === totalFrames - 1) {
            for (let j = 0; j < containers.length; j++) {
              containers[j].style.display = 'inline-block';
            }
            overlay.style.display = 'flex';
          }
        }
      }
  
      lastY = currentMouseY;
    });
  
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  
  })();
  