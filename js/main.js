document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetBody = document.querySelector(targetId);
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
      document.querySelectorAll('.accordion-collapse').forEach(body => {
        body.style.display = 'none';
      });
  
      document.querySelectorAll('.accordion-button').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });
      
      if (!isExpanded) {
        targetBody.style.display = 'block';
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      } else {
        targetBody.style.display = 'none';
      }
    });
  });
  