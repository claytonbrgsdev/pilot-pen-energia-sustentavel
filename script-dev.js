document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Script DEV carregado!');

    // Verificar se estamos na página correta
    if (!document.getElementById('pilot-page-energiasustentavel')) {
        console.log('❌ Não é a página de energia sustentável');
        return;
    }

    // Verificar se é desktop (>720px)
    if (window.innerWidth <= 720) {
        console.log('📱 Mobile detectado - animações desabilitadas');
        return;
    }

    console.log('✅ Página de energia sustentável detectada');
    console.log('✅ Desktop detectado - iniciando ambiente de desenvolvimento');

    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ============================================================================
    // ⚠️ SCROLLTRIGGER ZERADO - PRONTO PARA DESENVOLVIMENTO PROFISSIONAL
    // ============================================================================

    console.log('🎭 ScrollTrigger ZERADO - Animações removidas para desenvolvimento');
    console.log('📝 Ambiente preparado para implementar efeitos profissionais do zero');

    // ============================================================================
    // NAVBAR - COMPORTAMENTO OTIMIZADO
    // ============================================================================

    function retractHeaderScroll() {
        let go = true;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const header = document.querySelector('.site-header');
            const bottomHeader = document.querySelector('.bottom-header');
            const logoHeader = document.querySelector('.logo-header');
            const navLinks = document.querySelectorAll('.nav-bar > ul > li > a');
            const subMenus = document.querySelectorAll('ul.sub-menu');

            if (scrollTop > 20 && go) {
                if (header) {
                    header.style.height = '135px';
                    header.style.top = '-65px';
                    header.classList.remove('navbar-expanded');
                    header.classList.add('navbar-collapsed');
                }
                if (bottomHeader) { bottomHeader.style.height = '70px'; }
                if (logoHeader) { logoHeader.style.bottom = '10px'; }
                navLinks.forEach(link => { link.style.padding = '30px 15px 25px 30px'; });
                subMenus.forEach(menu => { menu.style.top = '69px'; });
                go = false;
                console.log('📉 Navbar colapsada (scroll > 20px)');
            } else if (scrollTop < 20 && !go) {
                if (header) {
                    header.style.height = '200px';
                    header.style.top = '0';
                    header.classList.remove('navbar-collapsed');
                    header.classList.add('navbar-expanded');
                }
                if (bottomHeader) { bottomHeader.style.height = '135px'; }
                if (logoHeader) { logoHeader.style.bottom = '30px'; }
                navLinks.forEach(link => { link.style.padding = '30px 15px 30px 30px'; });
                subMenus.forEach(menu => { menu.style.top = '73px'; });
                go = true;
                console.log('📈 Navbar expandida (scroll < 20px)');
            }
        });
    }

    // Inicializar navbar
    if (document.querySelector('.site-header')) {
        const header = document.querySelector('.site-header');
        header.classList.add('navbar-expanded'); // Estado inicial
        retractHeaderScroll();
        console.log('✅ Navbar otimizada - pin/collapse funcional');
    } else {
        console.log('❌ Navbar não encontrada');
    }

    // ============================================================================
    // ⚠️ ÁREA DE DESENVOLVIMENTO - ANIMAÇÕES DAS SEÇÕES
    // ============================================================================

    console.log('🎭 Área de desenvolvimento preparada - ScrollTrigger zerado');
    console.log('📝 Pronto para implementar efeitos parallax profissionais');

    // ============================================================================
    // CONFIGURAÇÃO BÁSICA PARA ANIMAÇÕES
    // ============================================================================
    
    // Configurar elementos básicos para animações
    function setupAnimationElements() {
        // Adicionar will-change para otimizar performance
        const animatableElements = document.querySelectorAll(
            '.capa-energiasustentavel, .energiasustentavel-section-1, .energiasustentavel-section-2, .energiasustentavel-section-3, .energiasustentavel-section-4'
        );
        
        animatableElements.forEach(element => {
            element.style.willChange = 'transform, opacity';
        });
        
        console.log('⚡ Elementos preparados para animações (will-change aplicado)');
        console.log(`📊 ${animatableElements.length} seções configuradas`);
    }
    
    // Executar configuração básica
    setupAnimationElements();

    // ============================================================================
    // SEÇÃO 1 - PIN E ALTURA DINÂMICA
    // ============================================================================
    
    function setupSection1Pin() {
        const section1 = document.querySelector('.energiasustentavel-section-1');
        const header = document.querySelector('.site-header');
        
        if (!section1 || !header) {
            console.log('❌ Seção 1 ou header não encontrados para pin');
            return;
        }

        // Verificar se é mobile - pin só funciona em desktop
        if (window.innerWidth <= 720) {
            console.log('📱 Mobile detectado - pin da seção 1 desabilitado');
            return;
        }

        // Configurar pin da seção 1 baseado no estado da navbar
        function updateSection1Pin() {
            const isCollapsed = header.classList.contains('navbar-collapsed');
            const triggerStart = isCollapsed ? 'top+=135px top' : 'top+=200px top';
            
            // Pin da seção 1
            ScrollTrigger.create({
                trigger: section1,
                start: triggerStart,
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
                scrub: false,
                id: 'section1-pin',
                onUpdate: (self) => {
                    console.log(`📍 Section 1 pin progress: ${self.progress.toFixed(2)}`);
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        console.log('🔒 Seção 1 PINNED - ocupando espaço disponível');
                    } else {
                        console.log('🔓 Seção 1 UNPINNED');
                    }
                },
                refreshPriority: 1
            });
        }

        // Atualizar pin quando a navbar muda de estado
        const navbarObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    ScrollTrigger.refresh();
                    console.log('🔄 ScrollTrigger refreshed - Navbar state changed');
                }
            });
        });

        navbarObserver.observe(header, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });

        // Configurar pin inicial
        updateSection1Pin();
        
        console.log('📍 Seção 1 pin configurado - responde ao estado da navbar');
        console.log('🎯 Pin start: baseado no estado da navbar (135px/200px)');
    }
    
    // Executar configuração da seção 1
    setupSection1Pin();

    // ============================================================================
    // LOGS DE DEBUG E VERIFICAÇÃO
    // ============================================================================

    console.log('🎯 DEV - Elementos identificados:');
    console.log('  🏠 Capa:', document.querySelector('.capa-energiasustentavel') ? '✅' : '❌');
    console.log('  📄 Seção 1:', document.querySelector('.energiasustentavel-section-1') ? '✅' : '❌');
    console.log('  📄 Seção 2:', document.querySelector('.energiasustentavel-section-2') ? '✅' : '❌');
    console.log('  📄 Seção 3:', document.querySelector('.energiasustentavel-section-3') ? '✅' : '❌');
    console.log('  📄 Seção 4:', document.querySelector('.energiasustentavel-section-4') ? '✅' : '❌');
    console.log('  🧭 Navbar:', document.querySelector('.site-header') ? '✅' : '❌');

    console.log('🎉 DEV - Ambiente de desenvolvimento pronto!');
    console.log('📋 Status:');
    console.log('  ✅ 5 seções estruturadas com indicadores visuais');
    console.log('  ✅ Bordas coloridas para desenvolvimento');
    console.log('  ✅ Labels identificadores das seções');
    console.log('  ✅ ScrollTrigger ZERADO - pronto para implementação');
    console.log('  ✅ Navbar funcional (pin/collapse otimizado)');
    console.log('🚀 Pronto para desenvolvimento de efeitos parallax profissionais!');

});
