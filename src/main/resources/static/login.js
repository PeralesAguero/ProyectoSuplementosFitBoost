document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const toggleLink = document.getElementById('toggle-link');
  const formTitle = document.getElementById('form-title');
  const formSubtitle = document.getElementById('form-subtitle');
  const rememberCheck = document.getElementById('remember-check');
  const mainBtn = document.getElementById('main-btn');
  const msg = document.getElementById('msg');

  // --- CAMBIO ENTRE LOGIN Y REGISTRO ---
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      msg.textContent = '';
      [loginForm, registerForm].forEach(f => f.classList.toggle('d-none'));

      const esRegistro = loginForm.classList.contains('d-none');
      formTitle.textContent = esRegistro ? 'Crear Cuenta' : 'Iniciar Sesión';
      formSubtitle.textContent = esRegistro ? 'Regístrate gratis' : 'Accede a tu cuenta';
      rememberCheck.classList.toggle('d-none', esRegistro);
      toggleLink.textContent = esRegistro ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Crea una aquí';
    });
  }

  // --- LOGIN ---
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const users = JSON.parse(localStorage.getItem('users') || '{}');

      if (users[email] && users[email] === password) {
        localStorage.setItem('usuarioActivo', email);
        window.location.href = "/src/main/resources/templates/index.html";
      } else {
        msg.textContent = 'Correo o contraseña incorrectos.';
        msg.classList.add('text-danger');
      }
    });
  }

  // --- REGISTRO ---
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('new-email').value.trim();
      const password = document.getElementById('new-password').value;
      const confirm = document.getElementById('confirm-password').value;
      const users = JSON.parse(localStorage.getItem('users') || '{}');

      msg.classList.remove('text-success', 'text-danger');

      if (users[email]) {
        msg.textContent = 'El correo ya está registrado.';
        msg.classList.add('text-danger');
        return;
      }

      if (password !== confirm || password.length < 6) {
        msg.textContent = 'Las contraseñas no coinciden o son demasiado cortas.';
        msg.classList.add('text-danger');
        return;
      }

      users[email] = password;
      localStorage.setItem('users', JSON.stringify(users));
      msg.textContent = '✅ ¡Cuenta creada! Ahora puedes iniciar sesión.';
      msg.classList.add('text-success');

      setTimeout(() => toggleLink.click(), 1500);
    });
  }
});

// --- LOGOUT GLOBAL ---
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'logout-btn') {
    localStorage.removeItem('usuarioActivo');
    window.location.href = "/src/main/resources/templates/login.html";
  }
});

// --- PROTECCIÓN DE RUTAS ---
// Aplica en todas las páginas menos login.html y register.html
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (!path.includes('login.html') && !path.includes('register.html')) {
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    if (!usuarioActivo) {
      window.location.href = "/src/main/resources/templates/login.html";
    }
  }
});
// --- MOSTRAR NOMBRE DE USUARIO EN NAVBAR ---
window.addEventListener('load', () => {
  const spanUsuario = document.getElementById('nombreUsuario');
  const usuarioActivo = localStorage.getItem('usuarioActivo');

  // Si no hay sesión activa, se redirige
  if (!usuarioActivo || usuarioActivo.trim() === "") {
    window.location.href = "/src/main/resources/templates/login.html";
    return;
  }

  // Si hay sesión, mostrar el nombre limpio
  if (spanUsuario) {
    const nombre = usuarioActivo.split('@')[0]; // parte antes del @
    spanUsuario.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
});
