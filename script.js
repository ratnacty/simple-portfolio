// Typewriter Animation
const typeWriter = (text, element, delay, onComplete) => {
    let charIndex = 0;
  
    function type() {
      if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, delay);
      } else {
        if (onComplete) {
          onComplete();
        }
      }
    }
  
    type();
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.querySelector(".typewriter");
    const jobElement = document.querySelector(".job-title");
  
    // Text for typewriter animation
    const nameText = "Ratna Setyaningrum";
  
    // Typewriter animation for name
    typeWriter(nameText, typewriterElement, 100, () => {
      // Display job title without animation
      jobElement.style.opacity = 1;
      jobElement.innerHTML = "Web Developer";
    });
  });
  