const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.background = "rgba(253, 224, 71, 0.3)";
    item.style.transform = "translateY(-8px)";
  });

  item.addEventListener("mouseout", () => {
    item.style.background = "transparent";
    item.style.transform = "translateY(0)";
  });
});

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseenter", () => {
  dropdownMenu.style.display = "flex";
});

dropdown.addEventListener("mouseleave", () => {
  dropdownMenu.style.display = "none";
});



const saludo = document.createElement("h2");

saludo.style.position = "absolute";
saludo.style.top = "70px";
saludo.style.left = "20px";
saludo.style.color = "#fff";
saludo.style.fontSize = "26px";
saludo.style.fontWeight = "bold";
saludo.style.textShadow = "2px 2px 4px rgba(0,0,0,0.6)";

const hora = new Date().getHours();
let mensaje = "";

if (hora < 12) mensaje = "¡Buenos días, viajero!";
else if (hora < 18) mensaje = "¡Buenas tardes, explorador!";
else mensaje = "¡Buenas noches, aventurero!";

saludo.textContent = mensaje;
document.body.appendChild(saludo);
