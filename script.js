// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MENÚ MÓVIL =====
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer click en un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // ===== CONTADOR ANIMADO =====
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }
    
    // Iniciar contadores cuando sean visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const appsCount = document.getElementById('appsCount');
                const gamesCount = document.getElementById('gamesCount');
                const downloadsCount = document.getElementById('downloadsCount');
                
                if (appsCount) animateCounter(appsCount, 3);
                if (gamesCount) animateCounter(gamesCount, 2);
                if (downloadsCount) animateCounter(downloadsCount, 156);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
    
    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías el formulario a un servidor
            // Por ahora solo mostraremos un mensaje
            
            // Mostrar mensaje de éxito
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensaje enviado!';
            submitBtn.disabled = true;
            submitBtn.style.background = '#10b981';
            
            // Resetear después de 3 segundos
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
            
            // Aquí iría el código para enviar el formulario realmente
            // Ejemplo con Formspree o EmailJS
        });
    }
    
    // ===== BOTÓN VOLVER ARRIBA =====
    const backTop = document.getElementById('backTop');
    
    if (backTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backTop.classList.add('show');
            } else {
                backTop.classList.remove('show');
            }
        });
        
        backTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== SEGUIMIENTO DE DESCARGAS =====
    // Contador simple de descargas (almacena en localStorage)
    function trackDownload(filename) {
        let downloads = JSON.parse(localStorage.getItem('downloads')) || {};
        downloads[filename] = (downloads[filename] || 0) + 1;
        localStorage.setItem('downloads', JSON.stringify(downloads));
        
        // Actualizar contador en la página
        const totalDownloads = Object.values(downloads).reduce((a, b) => a + b, 0);
        const downloadsCount = document.getElementById('downloadsCount');
        if (downloadsCount) {
            downloadsCount.textContent = totalDownloads;
        }
    }
    
    // Añadir evento a todos los enlaces de descarga
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function() {
            const filename = this.href.split('/').pop();
            trackDownload(filename);
            
            // Mostrar notificación (opcional)
            showNotification('Descarga iniciada: ' + filename);
        });
    });
    
    function showNotification(message) {
        // Crear notificación
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Eliminar después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // ===== NAVEGACIÓN SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ANIMACIONES AL SCROLL =====
    const animatedElements = document.querySelectorAll('.card');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        animationObserver.observe(el);
    });
    
    // ===== INICIALIZAR CONTADORES DESDE LOCALSTORAGE =====
    function initializeCounters() {
        const downloads = JSON.parse(localStorage.getItem('downloads')) || {};
        const totalDownloads = Object.values(downloads).reduce((a, b) => a + b, 0);
        const downloadsCount = document.getElementById('downloadsCount');
        
        if (downloadsCount && totalDownloads > 0) {
            downloadsCount.textContent = totalDownloads;
        }
    }
    
    initializeCounters();
    
});

// Añadir estilos para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);