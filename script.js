// RÉPLICA COMPLETA - ANIMAÇÕES GSAP - ENERGIA SUSTENTÁVEL
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('pilot-page-energiasustentavel') && window.innerWidth > 720) {
        // Registrar ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animação da capa - EFEITO CRIATIVO DE TRANSIÇÃO PARA SEÇÃO 1 (MAIS RÁPIDA)
        const capaTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".capa-energiasustentavel",
                start: "top-=200 top",
                end: "bottom-=120 top", // Reduziu a duração total da animação
                pin: true,
                scrub: 0.8, // Reduziu o scrub para resposta mais rápida
                // Callback para controlar elementos durante a transição
                onUpdate: function(self) {
                    const progress = self.progress;
                    const capa = document.querySelector('.capa-energiasustentavel');
                    const secao1 = document.querySelector('.energiasustentavel-section-1');
                    const capaImg = capa.querySelector('img');

                    // Efeitos progressivos na capa (MAIS RÁPIDOS)
                    if (progress < 0.2) {
                        // Primeira fase: movimento sutil para cima (MAIS RÁPIDO)
                        gsap.set(capa, { y: progress * -40 });
                    } else if (progress < 0.4) {
                        // Segunda fase: redução de escala e transparência (MAIS RÁPIDA)
                        const scaleProgress = (progress - 0.2) / 0.2;
                        gsap.set(capa, {
                            scale: 1 - (scaleProgress * 0.3),
                            opacity: 1 - (scaleProgress * 0.7), // Fade out mais rápido
                            y: -40 - (scaleProgress * 30)
                        });
                    } else if (progress < 0.7) {
                        // Terceira fase: blur e preparação para transição (MAIS RÁPIDA)
                        const transitionProgress = (progress - 0.4) / 0.3;
                        gsap.set(capa, {
                            scale: 0.7 - (transitionProgress * 0.2),
                            opacity: 0.3 - (transitionProgress * 0.2), // Opacity extremamente breve
                            y: -70 - (transitionProgress * 30),
                            filter: `blur(${transitionProgress * 4}px)`
                        });

                        // Prepara a seção 1 para entrar (MAIS RÁPIDA)
                        if (secao1) {
                            secao1.style.opacity = Math.min(1, transitionProgress * 3); // Aparece mais rápido
                            secao1.style.transform = `translateY(${(1 - transitionProgress) * -80}px)`;
                        }
                    } else {
                        // Última fase: capa desaparece rapidamente, seção 1 toma o controle
                        gsap.set(capa, {
                            scale: 0.5,
                            opacity: 0, // Opacity zero no final
                            y: -100,
                            filter: "blur(8px)"
                        });

                        if (secao1) {
                            secao1.style.opacity = "1";
                            secao1.style.transform = "translateY(0)";
                        }
                    }
                }
            }
        });

        // Adiciona animações específicas para elementos da capa
        capaTimeline
            .to(".capa-energiasustentavel img", {
                scale: 1.1,
                ease: "power1.inOut"
            }, 0)
            .to(".scroll-icon", {
                opacity: 0,
                y: -20,
                ease: "power2.in"
            }, 0.2);

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
                const capaEnergia = document.querySelector('.capa-energiasustentavel');

                if (header) {
                    header.style.height = '135px';
                    header.style.top = '-65px';
                    header.classList.remove('navbar-expanded');
                    header.classList.add('navbar-collapsed');
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

                // CAPA ACOMPANHA O MOVIMENTO DA NAVBAR via CSS classes

                go = false;
                console.log('📉 Navbar colapsada (scroll > 20px) - Capa ajustada');

            } else if (scrollTop < 20 && !go) {
                // SCROLL PARA CIMA - HEADER EXPANDIDO
                const header = document.querySelector('.site-header');
                const bottomHeader = document.querySelector('.bottom-header');
                const logoHeader = document.querySelector('.logo-header');
                const navLinks = document.querySelectorAll('.nav-bar > ul > li > a');
                const subMenus = document.querySelectorAll('ul.sub-menu');
                const capaEnergia = document.querySelector('.capa-energiasustentavel');

                if (header) {
                    header.style.height = '200px';
                    header.style.top = '0';
                    header.classList.remove('navbar-collapsed');
                    header.classList.add('navbar-expanded');
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

                // CAPA VOLTA À POSIÇÃO ORIGINAL via CSS classes

                go = true;
                console.log('📈 Navbar expandida (scroll < 20px) - Capa restaurada');
            }
        });
    }

    // Inicializar função da navbar
    if (document.querySelector('.site-header')) {
        // Configurar estado inicial da navbar
        const header = document.querySelector('.site-header');
        header.classList.add('navbar-expanded');

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
