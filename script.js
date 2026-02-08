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

// ===================================
//   WAGURI BOT - Portfolio JavaScript
//   Solo funcionalidades esenciales
// ===================================

(function() {
  'use strict';

  // Esperar a que el DOM esté listo
  document.addEventListener('DOMContentLoaded', initWaguriCard);

  function initWaguriCard() {
    const waguriCard = document.querySelector('.project-card.waguri-bot');
    
    if (!waguriCard) {
      console.warn('Waguri Bot card no encontrada');
      return;
    }

    console.log('%c🌸 Waguri Bot Loaded 🌸', 'color: #FF69B4; font-size: 16px; font-weight: bold;');

    // Inicializar todas las funcionalidades
    initCardAnimation(waguriCard);
    initStatsCounter(waguriCard);
    initParallaxEffect(waguriCard);
    initTagsAnimation(waguriCard);
    initCopyCommands(waguriCard);
    initLinksTracking(waguriCard);
    initImageLazyLoad(waguriCard);
  }

  // =============================
  // ANIMACIÓN DE ENTRADA
  // =============================
  function initCardAnimation(card) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(40px)';
          
          setTimeout(() => {
            card.style.transition = 'all 0.8s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
          
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(card);
  }

  // =============================
  // CONTADOR ANIMADO DE STATS
  // =============================
  function initStatsCounter(card) {
    const statsContainer = card.querySelector('.waguri-stats');
    if (!statsContainer) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statValues = statsContainer.querySelectorAll('.waguri-stat-value');
          
          statValues.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            animateValue(stat, 0, target, 2000, suffix);
          });
          
          observer.unobserve(statsContainer);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsContainer);
  }

  function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    element.style.opacity = '0.5';

    const timer = setInterval(() => {
      current += increment;
      
      if (current >= end) {
        element.textContent = end + suffix;
        element.style.opacity = '1';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  }

  // =============================
  // EFECTO PARALLAX EN IMAGEN
  // =============================
  function initParallaxEffect(card) {
    const image = card.querySelector('.waguri-project-image');
    if (!image) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      
      image.style.transform = `scale(1.08) translate(${percentX * 10}px, ${percentY * 10}px)`;
    });

    card.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
    });
  }

  // =============================
  // ANIMACIÓN DE TAGS
  // =============================
  function initTagsAnimation(card) {
    const tags = card.querySelectorAll('.waguri-tag');
    
    tags.forEach((tag, index) => {
      tag.style.opacity = '0';
      tag.style.transform = 'scale(0)';
      
      setTimeout(() => {
        tag.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        tag.style.opacity = '1';
        tag.style.transform = 'scale(1)';
      }, 100 * index);
    });
  }

  // =============================
  // COPIAR COMANDOS AL CLICK
  // =============================
  function initCopyCommands(card) {
    const features = card.querySelectorAll('.waguri-features li');
    
    features.forEach(li => {
      const text = li.textContent;
      const commands = text.match(/\/\w+/g);
      
      if (commands) {
        li.style.cursor = 'pointer';
        li.title = 'Click para copiar comandos';
        
        li.addEventListener('click', () => {
          const commandsText = commands.join(' ');
          
          if (navigator.clipboard) {
            navigator.clipboard.writeText(commandsText).then(() => {
              showToast(`✓ Copiado: ${commandsText}`);
              flashElement(li);
            }).catch(err => {
              console.error('Error al copiar:', err);
              showToast('✗ Error al copiar');
            });
          } else {
            // Fallback para navegadores antiguos
            fallbackCopyTextToClipboard(commandsText);
            showToast(`✓ Copiado: ${commandsText}`);
            flashElement(li);
          }
        });
      }
    });
  }

  // Fallback para copiar en navegadores sin clipboard API
  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
  }

  // Efecto visual al copiar
  function flashElement(element) {
    element.style.background = 'rgba(255, 105, 180, 0.2)';
    element.style.transform = 'translateX(8px)';
    
    setTimeout(() => {
      element.style.background = '';
      element.style.transform = '';
    }, 300);
  }

  // =============================
  // SISTEMA DE TOAST
  // =============================
  function showToast(message, duration = 3000) {
    // Remover toast existente
    const existingToast = document.querySelector('.waguri-toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'waguri-toast';
    toast.innerHTML = `
      <span style="font-size: 1.2rem;">✓</span>
      <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'waguriSlideOut 0.4s ease-out';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  // =============================
  // TRACKING DE CLICKS EN LINKS
  // =============================
  function initLinksTracking(card) {
    const links = card.querySelectorAll('.waguri-project-links a');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        // Obtener tipo de link
        const icon = link.querySelector('i');
        let linkType = 'unknown';
        
        if (icon) {
          if (icon.classList.contains('fa-github')) linkType = 'github';
          else if (icon.classList.contains('fa-globe')) linkType = 'website';
          else if (icon.classList.contains('fa-whatsapp')) linkType = 'whatsapp';
        }
        
        console.log(`📊 Click en ${linkType} de Waguri Bot`);
        
        // Efecto visual
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
          link.style.transform = '';
        }, 150);
      });
    });
  }

  // =============================
  // LAZY LOADING DE IMAGEN
  // =============================
  function initImageLazyLoad(card) {
    const image = card.querySelector('.waguri-project-image[data-src]');
    if (!image) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const realSrc = img.getAttribute('data-src');
          
          if (realSrc) {
            img.src = realSrc;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    });

    observer.observe(image);
  }

})();

// =============================
// FUNCIONES GLOBALES (OPCIONAL)
// =============================

// Función para actualizar stats desde GitHub API
window.updateWaguriStatsFromGitHub = async function() {
  try {
    const response = await fetch('https://api.github.com/repos/rufinofelipe/Waguri-bot');
    
    if (!response.ok) {
      throw new Error('Error al obtener datos de GitHub');
    }
    
    const data = await response.json();
    
    const card = document.querySelector('.project-card.waguri-bot');
    if (!card) return;
    
    const starsElement = card.querySelector('[data-stat="stars"]');
    if (starsElement) {
      starsElement.setAttribute('data-target', data.stargazers_count);
      starsElement.textContent = data.stargazers_count;
    }
    
    console.log(`✅ Stats actualizadas: ${data.stargazers_count} stars, ${data.forks_count} forks`);
    
  } catch (error) {
    console.warn('⚠️ No se pudieron cargar las stats de GitHub:', error);
  }
};

// Función para actualizar stats manualmente
window.updateWaguriStats = function(stars, commits, commands) {
  const card = document.querySelector('.project-card.waguri-bot');
  if (!card) return;
  
  const statsContainer = card.querySelector('.waguri-stats');
  if (!statsContainer) return;
  
  statsContainer.innerHTML = `
    <div class="waguri-stat-item">
      <span class="waguri-stat-value" data-target="${stars}" data-stat="stars">${stars}</span>
      <span class="waguri-stat-label">⭐ Stars</span>
    </div>
    <div class="waguri-stat-item">
      <span class="waguri-stat-value" data-target="${commits}">${commits}</span>
      <span class="waguri-stat-label">🔄 Commits</span>
    </div>
    <div class="waguri-stat-item">
      <span class="waguri-stat-value" data-target="${commands}" data-suffix="+">${commands}+</span>
      <span class="waguri-stat-label">📝 Comandos</span>
    </div>
  `;
  
  console.log('✅ Stats actualizadas manualmente');
};

// Uso:
// updateWaguriStats(45, 230, 100);
// updateWaguriStatsFromGitHub(); // Para obtener stats reales de GitHub