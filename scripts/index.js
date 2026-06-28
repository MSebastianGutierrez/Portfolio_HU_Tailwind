        // ============================================
        // ============================================
        // MOBILE MENU TOGGLE 
        // ============================================
        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const navMenu = document.getElementById('navMenu');
            const navLinks = document.querySelectorAll('.nav-link');

            // Verificar que los elementos existen
            if (!mobileMenuToggle || !navMenu) {
                console.error('No se encontraron los elementos del menú');
                return;
            }

            // Función para alternar el menú
            function toggleMenu() {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');

                // Debug: Mostrar estado en consola
                console.log('Menú activo:', navMenu.classList.contains('active'));
            }

            // Evento click en el botón hamburguesa
            mobileMenuToggle.addEventListener('click', function (e) {
                e.preventDefault();
                toggleMenu();
            });

            // Cerrar menú al hacer clic en un enlace
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                });
            });

            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', function (e) {
                if (navMenu.classList.contains('active')) {
                    const isClickInside = navMenu.contains(e.target) || mobileMenuToggle.contains(e.target);
                    if (!isClickInside) {
                        navMenu.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            });

            console.log('✅ Menú hamburguesa inicializado correctamente');
        });

        // ============================================
        // TYPING ANIMATION (sin cambios)
        // ============================================
        const typingText = document.getElementById('typingText');
        const words = ['Full Stack Developer', 'Cloud AWS', 'DevOps', 'Redes de Datos'];
        let wordIndex = 0,
            charIndex = 0,
            isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            let typeSpeed = isDeleting ? 50 : 100;
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            setTimeout(type, typeSpeed);
        }
        type();

        // ============================================
        // SMOOTH SCROLL (sin cambios)
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });

        // ============================================
        // SCROLL REVEAL (con Intersection Observer moderno)
        // ============================================
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
        revealElements.forEach(el => observer.observe(el));

        // ============================================
        // STATS COUNTER ANIMATION (con mejora)
        // ============================================
        let statsAnimated = false;

        function animateStats() {
            const statsSection = document.querySelector('.stats-grid');
            if (!statsSection || statsAnimated) return;
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                statsAnimated = true;
                document.querySelectorAll('.stat-number').forEach(stat => {
                    const text = stat.textContent;
                    const target = parseInt(text);
                    const suffix = text.includes('+') ? '+' : '';
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target + suffix;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + suffix;
                        }
                    }, 16);
                });
            }
        }
        window.addEventListener('scroll', animateStats);
        // Ejecutar también al cargar
        setTimeout(animateStats, 300);

        // ============================================
        // CONSOLE EASTER EGG
        // ============================================
        console.log('%c👋 ¡Hola, Reclutador!', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
        console.log('%cMiguel Sebastián Gutiérrez - Desarrollador Full Stack', 'color: #94a3b8; font-size: 14px;');
        console.log('%c📧 sebagutierrez374@gmail.com | 📱 +54 261-6166627', 'color: #64748b; font-size: 12px;');
        console.log('%c¡Listo para aportar valor a su equipo!', 'color: #10b981; font-size: 14px; font-weight: 600;');