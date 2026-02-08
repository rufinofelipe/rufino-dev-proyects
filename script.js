// ================================
//   PORTFOLIO - JavaScript
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🚀 Portfolio Loaded!', 'color: #00b894; font-size: 16px; font-weight: bold;');

    // ================================
    // ANIMAR CONTADORES DE STATS
    // ================================
    const statValues = document.querySelectorAll('.waguri-card .stat-value[data-target]');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    // ================================
    // COPIAR COMANDOS (WAGURI)
    // ================================
    const clickableFeatures = document.querySelectorAll('.feature-item.clickable');
    
    clickableFeatures.forEach(feature => {
        feature.addEventListener('click', function() {
            const text = this.textContent;
            const commands = text.match(/\/\w+/g);
            
            if (commands) {
                const commandsText = commands.join(' ');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(commandsText).then(() => {
                        showToast('✓ Comandos copiados: ' + commandsText);
                        flashElement(this);
                    }).catch(() => {
                        fallbackCopy(commandsText);
                        showToast('✓ Comandos copiados: ' + commandsText);
                        flashElement(this);
                    });
                } else {
                    fallbackCopy(commandsText);
                    showToast('✓ Comandos copiados: ' + commandsText);
                    flashElement(this);
                }
            }
        });
    });

    // Fallback para copiar
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Error al copiar:', err);
        }
        document.body.removeChild(textarea);
    }

    // Efecto visual al copiar
    function flashElement(element) {
        const originalBg = element.style.background;
        element.style.background = 'rgba(255, 105, 180, 0.2)';
        element.style.transform = 'translateX(8px)';
        
        setTimeout(() => {
            element.style.background = originalBg;
            element.style.transform = '';
        }, 300);
    }

    // ================================
    // SISTEMA DE TOAST
    // ================================
    function showToast(message, duration = 3000) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.4s ease-out';
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }

    // ================================
    // SMOOTH SCROLL
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ================================
    // ANIMACIÓN DE ENTRADA DE CARDS
    // ================================
    const projectCards = document.querySelectorAll('.project-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        cardObserver.observe(card);
    });

    // ================================
    // TRACKING DE CLICKS EN BOTONES
    // ================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            console.log(`📊 Click en: ${buttonText}`);
            
            // Efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ================================
    // MENSAJE PARA DESCARGA OMNIBOT
    // ================================
    const omnibotDownload = document.querySelector('.omnibot-card .btn-primary');
    if (omnibotDownload) {
        omnibotDownload.addEventListener('click', function() {
            showToast('⚡ Descargando Omnibot... Recuerda activar "Orígenes desconocidos"');
        });
    }

    console.log('✅ Todas las funcionalidades inicializadas');
});