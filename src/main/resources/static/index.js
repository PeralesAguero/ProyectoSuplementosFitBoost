document.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btn-logout');

  // Si el botón de cerrar sesión existe en la página
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      // Eliminar el usuario activo
      localStorage.removeItem('usuarioActivo');

      // Redirigir al login
      window.location.href = "/src/main/resources/static/login.js"; // cambia el path si tu login está en otro lado
    });
  }

  // Verificar si hay un usuario logueado
  const usuarioActivo = localStorage.getItem('usuarioActivo');
  if (!usuarioActivo) {
    // Si no hay usuario activo, enviarlo al login automáticamente
    window.location.href = "/src/main/resources/templates/login.html";
  }
});

// Si no hay usuario autenticado, redirige a login.html
if (!localStorage.getItem('usuarioActivo')) {
  window.location.href = '/login'; // Esto está bien
}

// Cerrar sesión
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('usuarioActivo');
      window.location.href = '/login'; // Esto está bien
    });
  }
});

// Mostrar el nombre del usuario logueado en la navbar
document.addEventListener('DOMContentLoaded', function() {
  const userLogin = document.getElementById('user-login');
  const usuario = localStorage.getItem('usuarioActivo');
  if (userLogin && usuario) {
    userLogin.textContent = `Hola, ${usuario}`;
  }
});