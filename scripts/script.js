// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica de Parallax (del antiguo script.js) ---
    const heroContainer = document.querySelector('.hero-container');
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');

    if (heroContainer && heroImage && heroText) {
        heroContainer.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            
            // Movimiento parallax de la imagen
            heroImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });
    }

    // --- NUEVA Lógica de Menú Overlay ---
    const openButton = document.getElementById('menuOpenButton');
    const closeButton = document.getElementById('menuCloseButton');
    const menuLinks = document.querySelectorAll('.menu-links a');

    // 1. Abrir el menú
    if (openButton) {
        openButton.addEventListener('click', (e) => {
            e.preventDefault(); // Previene que el link '#' salte
            document.body.classList.add('menu-active');
        });
    }

    // 2. Cerrar el menú con el botón 'X'
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('menu-active');
        });
    }

    // --- Lógica de Clicks en Vínculos del Menú (del antiguo menu.js) ---
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el salto de página
            e.preventDefault(); 
            
            // 1. Quita la clase 'active' de TODOS los links
            menuLinks.forEach(l => l.classList.remove('active'));
            
            // 2. Añade la clase 'active' solo al link clickeado
            this.classList.add('active');

            // 3. Cierra el menú
            document.body.classList.remove('menu-active');
            
            // Opcional: en el futuro, puedes agregar scroll suave a la sección
            // const targetId = this.getAttribute('href');
            // ... (lógica de scroll)
        });
    });

});