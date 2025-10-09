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