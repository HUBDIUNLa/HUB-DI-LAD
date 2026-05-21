
async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

function initNavbar() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

  if (!toggle || !mobileMenu || !icon) return;

  toggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");

    toggle.setAttribute("aria-expanded", String(!isOpen));
    icon.innerHTML = isOpen ? "&#9776;" : "&times;";
  });
}

loadComponent("navbar", "components/navbar.html").then(initNavbar);
loadComponent("footer", "components/footer.html");


