document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});
