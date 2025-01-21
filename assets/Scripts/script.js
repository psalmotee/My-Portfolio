// hambuger Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const themeButton = document.getElementById("theme-button");
  const body = document.body;

  // Add active class to current nav item
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Toggle mobile menu
  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Toggle dark theme
  themeButton.addEventListener("click", () => {
    body.classList.toggle("theme");
    if (body.classList.contains("theme")) {
      themeButton.classList.replace("bxs-moon", "bxs-sun");
    } else {
      themeButton.classList.replace("bxs-sun", "bxs-moon");
    }
  });
});