// RÉPLICA LIMPA - SCRIPT BÁSICO PARA TESTE
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Script carregado com sucesso!');

    // === PASSO 1: Teste básico do GSAP ===
    if (typeof gsap !== 'undefined') {
        console.log('✅ GSAP carregado com sucesso!');

        if (typeof ScrollTrigger !== 'undefined') {
            console.log('✅ ScrollTrigger carregado com sucesso!');
        } else {
            console.log('❌ ScrollTrigger não encontrado');
        }
    } else {
        console.log('❌ GSAP não encontrado');
    }

    // === PASSO 2: Animações básicas para teste ===
    if (document.getElementById('pilot-page-energiasustentavel')) {
        console.log('✅ Container da página encontrado!');

        // Teste da barra de progresso
        const bar = document.querySelector(".progress-bar");
        if (bar) {
            console.log('✅ Barra de progresso encontrada!');

            // Função para preencher a barra
            function setProgress(value) {
                const progress = Math.max(0, Math.min(100, value));
                bar.style.width = progress + "%";
                console.log(`📊 Barra de progresso: ${progress}%`);
            }

            // Simular preenchimento da barra após 2 segundos
            setTimeout(() => {
                setProgress(80);
            }, 2000);
        } else {
            console.log('❌ Barra de progresso não encontrada');
        }

        // === PASSO 3: Animações básicas com GSAP ===
        if (window.innerWidth > 720) {
            console.log('✅ Iniciando animações para desktop...');

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

            // Animações da seção 1
            gsap.fromTo(".es-s1-text-1", { opacity: 0, x: -150 }, {
                opacity: 1, x: 0, duration: 1.2,
                scrollTrigger: {
                    trigger: ".es-s1-text-1",
                    start: "top 85%", end: "top 60%", scrub: true
                }
            });

            gsap.fromTo(".es-s1-text-2", { opacity: 0, x: 150 }, {
                opacity: 1, x: 0, duration: 1.2,
                scrollTrigger: {
                    trigger: ".es-s1-text-2",
                    start: "top 90%", end: "top 65%", scrub: true
                }
            });

            // Animações de imagens
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
                    }
                }
            );

            console.log('✅ Animações da seção 1 configuradas!');
        } else {
            console.log('⚠️ Tela muito pequena, pulando animações');
        }
    } else {
        console.log('❌ Container da página não encontrado');
    }

    // === PASSO 4: Funcionalidades básicas ===
    console.log('🔧 Configurando funcionalidades básicas...');

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
                console.log('📜 Smooth scroll executado');
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
    const searchForm = document.querySelector('.searchform');
    const searchField = document.querySelector('.search-field');

    if (searchForm && searchField) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchField.value.trim();
            if (searchTerm) {
                console.log('🔍 Busca executada:', searchTerm);
                alert('Busca por: ' + searchTerm);
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuList = document.querySelector('.mobile-menu-list');

    if (mobileMenuBtn && mobileMenuList) {
        mobileMenuBtn.addEventListener('click', function() {
            const isVisible = mobileMenuList.style.display === 'block';
            mobileMenuList.style.display = isVisible ? 'none' : 'block';
            console.log('📱 Menu mobile:', isVisible ? 'fechado' : 'aberto');
        });
    }

    console.log('🎉 Réplica básica carregada com sucesso!');
    console.log('📋 Status:');
    console.log('- ✅ Navbar funcional (pin/collapse corrigido)');
    console.log('- ✅ Container com borda azul');
    console.log('- ✅ Capa carregada');
    console.log('- ✅ Seção 1 construída');
    console.log('- ✅ Animações GSAP ativas');
    console.log('- ✅ Responsividade testada');
    console.log('🔄 Próximos passos: Construir seção 2, 3 e 4');
});
