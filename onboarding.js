document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBrowsingBtn');
  
  // Close tab functionality
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      // Add a quick exit animation before closing
      document.body.style.transition = 'opacity 0.4s ease';
      document.body.style.opacity = '0';
      
      setTimeout(() => {
        window.close(); // Closes the current tab
      }, 400);
    });
  }

  // Advanced Mouse Tracking Glow Effect for Cards
  const cards = document.querySelectorAll('.interactive-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Creates a subtle glowing spotlight effect that follows the mouse
      card.style.background = `
        radial-gradient(
          800px circle at ${x}px ${y}px, 
          rgba(255, 255, 255, 0.06),
          transparent 40%
        ),
        rgba(255, 255, 255, 0.02)
      `;
    });

    // Reset background when mouse leaves
    card.addEventListener('mouseleave', () => {
      card.style.background = 'rgba(255, 255, 255, 0.03)';
    });
  });
});