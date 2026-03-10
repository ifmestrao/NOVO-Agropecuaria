// scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) { 
          const offset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Animación del indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      let direction = 1;
      let position = 0;
      
      setInterval(() => {
        position += direction * 0.5;
        if (position >= 10 || position <= 0) {
          direction *= -1;
        }
        scrollIndicator.style.transform = `translate(-50%, ${position}px)`;
      }, 30);
    }

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Toggle menú móvil
    function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const menuIcon = document.getElementById('menuIcon');
      const closeIcon = document.getElementById('closeIcon');
      
      mobileMenu.classList.toggle('active');
      
      if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }

    // Smooth scroll
    function scrollToSection(id, event) {
      if (event) {
        event.preventDefault();
      }
      
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');
        
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      }
    }


