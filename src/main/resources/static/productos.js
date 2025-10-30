document.addEventListener('DOMContentLoaded', () => {
  // 🔹 Botón de cerrar sesión
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Eliminar usuario activo del localStorage
      localStorage.removeItem('usuarioActivo');

      // Redirigir al login
      window.location.href = '/login';
    });
  }

  // 🔹 Botones de la barra lateral
  const buttons = document.querySelectorAll('.sidebar-btn');
  const sections = document.querySelectorAll('.contenido-section');

  if (buttons.length > 0 && sections.length > 0) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Quitar la clase "active" de todos los botones
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Ocultar todas las secciones
        sections.forEach((sec) => sec.classList.add('d-none'));

        // Mostrar solo la sección seleccionada
        const sectionId = btn.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
          targetSection.classList.remove('d-none');
        } else {
          console.warn(`⚠️ No se encontró la sección con id "${sectionId}"`);
        }
      });
    });
  } else {
    console.warn('⚠️ No se encontraron botones o secciones para manejar el cambio de vista.');
  }
});
