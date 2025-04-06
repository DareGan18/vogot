function verMas() {
    document.getElementById("cursos").scrollIntoView({ behavior: "smooth" });
  }

  // Redireccionar al hacer clic en el icono de usuario
document.getElementById('loginBtn').addEventListener('click', function () {
    window.location.href = 'login.html';
  });

  // main.js
fetch('http://localhost:3000/usuarios')
.then(res => res.json())
.then(data => console.log(data));
