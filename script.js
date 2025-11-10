document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Usuário e senha de exemplo (apenas para teste!)
  const user = "admin";
  const pass = "1234";

  if (username === user && password === pass) {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
    // Redirecionar para outra página
    setTimeout(() => {
      window.location.href = "dashboard.html"; // substitua pelo destino desejado
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos.";
  }
});
