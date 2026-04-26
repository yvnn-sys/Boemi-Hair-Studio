        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        });

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
        function closeMobile() {
            mobileMenu.classList.remove('open');
        }