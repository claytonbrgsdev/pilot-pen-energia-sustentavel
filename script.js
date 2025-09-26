// RÉPLICA COMPLETA - ANIMAÇÕES GSAP - ENERGIA SUSTENTÁVEL
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('pilot-page-energiasustentavel') && window.innerWidth > 720) {
        // Registrar ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animação da capa
        gsap.to(".capa-energiasustentavel", {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".capa-energiasustentavel",
                start: "top-=200 top",
                end: "bottom top",
                pin: true,
                scrub: true
            }
        });

        // === SEÇÃO 1 ===
        // Texto 1
        gsap.fromTo(".es-s1-text-1", { opacity: 0, x: -150 }, {
            opacity: 1, x: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s1-text-1",
                start: "top 85%", end: "top 60%", scrub: true
            }
        });

        // Imagens da seção 1
        gsap.fromTo(".es-s1-002", { opacity: 0, x: 150 }, {
            opacity: 1, x: 0, duration: 1.8,
            scrollTrigger: {
                trigger: ".es-s1-002",
                start: "top 80%", end: "top 55%", scrub: 3
            }
        });

        gsap.fromTo(".es-s1-004", { opacity: 0, y: 100 }, {
            opacity: 1, y: 0, duration: 2,
            scrollTrigger: {
                trigger: ".es-s1-004",
                start: "top 95%", end: "top 30%", scrub: 2
            }
        });

        gsap.fromTo(".es-s1-text-2", { opacity: 0, x: 150 }, {
            opacity: 1, x: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s1-text-2",
                start: "top 90%", end: "top 65%", scrub: true
            }
        });

        // Elementos da seção 1 (array)
        const s1Elements = [".es-s1-001", ".es-s1-003", ".es-s1-006"];
        s1Elements.forEach(selector => {
            gsap.fromTo(selector, { opacity: 0, y: 100, rotation: -5 }, {
                opacity: 1, y: 0, rotation: 0, duration: 1.1,
                scrollTrigger: {
                    trigger: selector,
                    start: "top 95%", end: "top 70%", scrub: true
                }
            });
        });

        // Barra de progresso
        const bar = document.querySelector(".progress-bar");

        function setProgress(value) {
            const progress = Math.max(0, Math.min(100, value));
            bar.style.width = progress + "%";
        }

        gsap.fromTo(".es-s1-005",
            { opacity: 0, y: 100, rotation: -5 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 1.1,
                scrollTrigger: {
                    trigger: ".es-s1-005",
                    start: "top 95%",
                    end: "top 70%",
                    scrub: true
                },
                onComplete: () => {
                    setProgress(80);
                }
            }
        );

        // === SEÇÃO 2 ===
        gsap.fromTo(".es-s2-text-1", { opacity: 0, x: -100 }, {
            opacity: 1, x: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s2-text-1",
                start: "top 85%", end: "top 60%", scrub: true
            }
        });

        gsap.fromTo(".es-s2-002", { opacity: 0, x: 100 }, {
            opacity: 1, x: 0, duration: 2.2,
            scrollTrigger: {
                trigger: ".es-s2-002",
                start: "top 95%", end: "top 40%", scrub: 1.5
            }
        });

        const s2Elements = [".es-s2-001", ".es-s2-003", ".es-s2-004", ".es-s2-005", ".es-s2-006"];
        s2Elements.forEach(selector => {
            gsap.fromTo(selector, { opacity: 0, y: 80, rotation: -5 }, {
                opacity: 1, y: 0, rotation: 0, duration: 1.1,
                scrollTrigger: {
                    trigger: selector,
                    start: "top 95%", end: "top 70%", scrub: true
                }
            });
        });

        // === SEÇÃO 3 ===
        gsap.fromTo(".es-s3-text-1", { opacity: 0, y: 100 }, {
            opacity: 1, y: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s3-text-1",
                start: "top 85%", end: "top 60%", scrub: true
            }
        });

        gsap.fromTo(".es-s3-001", { opacity: 0, x: -150 }, {
            opacity: 1, x: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s3-001",
                start: "top 85%", end: "top 60%", scrub: true
            }
        });

        const s3Elements = [".es-s3-001", ".es-s3-002", ".es-s3-003"];
        s3Elements.forEach(selector => {
            gsap.fromTo(selector, { opacity: 0, y: 80, rotation: -4 }, {
                opacity: 1, y: 0, rotation: 0, duration: 1.5,
                scrollTrigger: {
                    trigger: selector,
                    start: "top 95%", end: "top 55%", scrub: true
                }
            });
        });

        // === SEÇÃO 4 ===
        gsap.fromTo(".es-s4-text-1", { opacity: 0, x: -100 }, {
            opacity: 1, x: 0, duration: 1.2,
            scrollTrigger: {
                trigger: ".es-s4-text-1",
                start: "top 85%", end: "top 60%", scrub: 2
            }
        });

        const s4Elements = [".es-s4-001", ".es-s4-002"];
        s4Elements.forEach(selector => {
            gsap.fromTo(selector, { opacity: 0, y: 80, rotation: -4 }, {
                opacity: 1, y: 0, rotation: 0, duration: 1.1,
                scrollTrigger: {
                    trigger: selector,
                    start: "top 95%", end: "top 70%", scrub: true
                }
            });
        });

        // === ANIMAÇÕES CONTÍNUAS ===
        // Animações CSS para elementos floating e scale
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach(element => {
            element.style.animation = 'floating-element 2s infinite';
        });

        const scaleElements = document.querySelectorAll('.scale-1, .scale-2, .scale-3');
        scaleElements.forEach(element => {
            if (element.classList.contains('scale-1')) {
                element.style.animation = 'scal-element 2s infinite';
            } else if (element.classList.contains('scale-2')) {
                element.style.animation = 'scal-element 3s infinite';
            } else if (element.classList.contains('scale-3')) {
                element.style.animation = 'scal-element 1.7s infinite';
            }
        });

        // === PARALLAX GERAL ===
        // Parallax para elementos com data-speed
        const parallaxElements = document.querySelectorAll('[data-speed]');
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed');

            gsap.to(element, {
                y: (element.offsetHeight * speed),
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        console.log('Animações da página Energia Sustentável carregadas com sucesso!');
    }
});

// === FUNCIONALIDADES ADICIONAIS ===
// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

    // Navbar Retract Animation - COMPORTAMENTO ORIGINAL DO PROJETO
    function retractHeaderScroll() {
        let go = true;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 20 && go) {
                // SCROLL PARA BAIXO - HEADER COLAPSADO
                const header = document.querySelector('.site-header');
                const bottomHeader = document.querySelector('.bottom-header');
                const logoHeader = document.querySelector('.logo-header');
                const navLinks = document.querySelectorAll('.nav-bar > ul > li > a');
                const subMenus = document.querySelectorAll('ul.sub-menu');

                if (header) {
                    header.style.height = '135px';
                    header.style.top = '-65px';
                }

                if (bottomHeader) {
                    bottomHeader.style.height = '70px';
                }

                if (logoHeader) {
                    logoHeader.style.bottom = '10px';
                }

                navLinks.forEach(link => {
                    link.style.padding = '30px 15px 25px 30px';
                });

                subMenus.forEach(menu => {
                    menu.style.top = '69px';
                });

                go = false;
                console.log('📉 Navbar colapsada (scroll > 20px)');

            } else if (scrollTop < 20 && !go) {
                // SCROLL PARA CIMA - HEADER EXPANDIDO
                const header = document.querySelector('.site-header');
                const bottomHeader = document.querySelector('.bottom-header');
                const logoHeader = document.querySelector('.logo-header');
                const navLinks = document.querySelectorAll('.nav-bar > ul > li > a');
                const subMenus = document.querySelectorAll('ul.sub-menu');

                if (header) {
                    header.style.height = '200px';
                    header.style.top = '0';
                }

                if (bottomHeader) {
                    bottomHeader.style.height = '135px';
                }

                if (logoHeader) {
                    logoHeader.style.bottom = '30px';
                }

                navLinks.forEach(link => {
                    link.style.padding = '30px 15px 30px 30px';
                });

                subMenus.forEach(menu => {
                    menu.style.top = '73px';
                });

                go = true;
                console.log('📈 Navbar expandida (scroll < 20px)');
            }
        });
    }

    // Inicializar função da navbar
    if (document.querySelector('.site-header')) {
        retractHeaderScroll();
        console.log('✅ Navbar behavior initialized (pin/collapse corrigido)');
    } else {
        console.log('❌ Navbar não encontrada para inicialização');
    }

// Função de busca
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.searchform');
    const searchField = document.querySelector('.search-field');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchField.value.trim();
            if (searchTerm) {
                // Implementar busca
                console.log('Buscando por:', searchTerm);
                alert('Busca por: ' + searchTerm);
            }
        });
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuList = document.querySelector('.mobile-menu-list');

    if (mobileMenuBtn && mobileMenuList) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuList.style.display = mobileMenuList.style.display === 'block' ? 'none' : 'block';
        });
    }
});

console.log('Scripts da réplica carregados com sucesso!');
