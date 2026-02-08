/* ================================
   VARIABLES Y RESET
   ================================ */
:root {
    --primary: #00b894;
    --primary-dark: #00a085;
    --secondary: #0984e3;
    --waguri: #FF69B4;
    --waguri-dark: #FF1493;
    --dark: #0f172a;
    --dark-light: #1e293b;
    --light: #f1f5f9;
    --gray: #64748b;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--dark);
    color: var(--light);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ================================
   HEADER
   ================================ */
.header {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 184, 148, 0.2);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--light);
}

.logo-icon {
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--gray);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary);
}

/* ================================
   HERO
   ================================ */
.hero {
    padding: 140px 0 80px;
    text-align: center;
    background: linear-gradient(135deg, var(--dark), #1a1a2e);
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: var(--gray);
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* ================================
   SECCIONES
   ================================ */
.section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--light);
}

.section-title .highlight {
    color: var(--primary);
}

/* ================================
   TARJETAS DE PROYECTO
   ================================ */
.projects-section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.project-card {
    background: var(--dark-light);
    border-radius: 20px;
    padding: 2.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* ================================
   PROYECTO OMNIBOT
   ================================ */
.omnibot-card {
    border-left: 4px solid var(--primary);
}

.omnibot-card:hover {
    box-shadow: 0 20px 40px rgba(0, 184, 148, 0.3);
}

.omnibot-icon {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
}

/* ================================
   PROYECTO WAGURI
   ================================ */
.waguri-card {
    border-left: 4px solid var(--waguri);
}

.waguri-card:hover {
    box-shadow: 0 20px 40px rgba(255, 105, 180, 0.3);
}

.waguri-icon {
    background: linear-gradient(135deg, var(--waguri), var(--waguri-dark));
    font-size: 3rem;
}

.featured-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #FFD700;
    color: var(--dark);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.8rem;
    box-shadow: 0 4px 10px rgba(255, 215, 0, 0.4);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* ================================
   HEADER DE PROYECTO
   ================================ */
.project-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.project-icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
}

.project-title-section {
    flex: 1;
}

.project-title {
    font-size: 2rem;
    color: var(--light);
    margin-bottom: 0.3rem;
}

.project-subtitle {
    color: var(--gray);
    font-size: 1rem;
}

/* ================================
   CONTENIDO DE PROYECTO
   ================================ */
.project-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.project-description {
    color: #cbd5e1;
    font-size: 1.05rem;
    line-height: 1.8;
}

/* ================================
   TAGS DE TECNOLOGÍA
   ================================ */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
}

.tech-tag {
    background: linear-gradient(135deg, var(--waguri), var(--waguri-dark));
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(255, 105, 180, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    transform: scale(0);
    animation: tagPop 0.4s ease forwards;
}

.tech-tag:nth-child(1) { animation-delay: 0.1s; }
.tech-tag:nth-child(2) { animation-delay: 0.2s; }
.tech-tag:nth-child(3) { animation-delay: 0.3s; }
.tech-tag:nth-child(4) { animation-delay: 0.4s; }
.tech-tag:nth-child(5) { animation-delay: 0.5s; }

@keyframes tagPop {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.tech-tag:hover {
    transform: translateY(-3px) scale(1.05);
}

/* ================================
   ESTADÍSTICAS
   ================================ */
.project-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.stat-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.2rem;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s;
}

.stat-card:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
}

.stat-value {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
}

.waguri-card .stat-value {
    color: var(--waguri);
}

.stat-label {
    display: block;
    font-size: 0.85rem;
    color: var(--gray);
    margin-top: 0.5rem;
}

/* ================================
   CARACTERÍSTICAS
   ================================ */
.project-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    transition: all 0.3s;
}

.feature-item:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(5px);
}

.feature-item.clickable {
    cursor: pointer;
}

.feature-item.clickable:hover {
    background: rgba(255, 105, 180, 0.1);
}

.feature-icon {
    width: 40px;
    height: 40px;
    background: rgba(0, 184, 148, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.2rem;
    flex-shrink: 0;
}

.waguri-card .feature-icon {
    background: rgba(255, 105, 180, 0.1);
    color: var(--waguri);
}

.feature-text strong {
    display: block;
    color: var(--light);
    margin-bottom: 0.3rem;
}

.feature-text p {
    color: var(--gray);
    font-size: 0.9rem;
}

/* ================================
   BOTONES
   ================================ */
.project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 1.8rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 184, 148, 0.5);
}

.waguri-card .btn-primary {
    background: linear-gradient(135deg, var(--waguri), var(--waguri-dark));
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
}

.waguri-card .btn-primary:hover {
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5);
}

.btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background: var(--primary);
    color: white;
}

.waguri-card .btn-secondary {
    color: var(--waguri);
    border-color: var(--waguri);
}

.waguri-card .btn-secondary:hover {
    background: var(--waguri);
    color: white;
}

/* ================================
   NOTA DEL PROYECTO
   ================================ */
.project-note {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem;
    background: rgba(245, 158, 11, 0.1);
    border-left: 3px solid #f59e0b;
    border-radius: 8px;
    color: #fbbf24;
    font-size: 0.9rem;
}

/* ================================
   TOAST DE NOTIFICACIÓN
   ================================ */
.toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, var(--waguri), var(--waguri-dark));
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.4s ease-out;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

@keyframes slideIn {
    from {
        transform: translateX(400px);
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
        transform: translateX(400px);
        opacity: 0;
    }
}

/* ================================
   FOOTER
   ================================ */
.footer {
    background: var(--dark-light);
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 80px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.footer-links a {
    color: var(--gray);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--primary);
}

.copyright {
    color: var(--gray);
    font-size: 0.9rem;
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .project-card {
        padding: 1.5rem;
    }

    .project-header {
        flex-direction: column;
        text-align: center;
    }

    .project-title {
        font-size: 1.5rem;
    }

    .project-actions {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .project-stats {
        grid-template-columns: 1fr;
    }

    .nav-links {
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .project-icon {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }

    .featured-badge {
        font-size: 0.7rem;
        padding: 0.4rem 0.8rem;
    }
}