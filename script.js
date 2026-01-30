const API = "https://script.google.com/macros/s/AKfycbzyeq_W0Q2i0bcq7m9BVIIgy0ORq9juXMok-4KajSYh09Es98VigEL27ru6jgjxiF6v/exec";

function login() {
  const name = document.getElementById("name").value;
  if (!name) {
    alert("Entrez un nom");
    return;
  }

  const id = Date.now().toString();
  localStorage.setItem("client_id", id);

  fetch(`${API}?action=add&id=${id}&nom=${encodeURIComponent(name)}`)
    .then(() => window.location.href = "client.html");
}

function admin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("Mot de passe incorrect");
  }
}
