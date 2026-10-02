/* ==================================================
   LA TAPADA DE LUNA
   AGAVE Y ENCUADRE 2026
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".site-header__menu");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu__nav a");


  if (!menuButton || !mobileMenu) {
    return;
  }


  function openMenu() {

    mobileMenu.style.display = "block";

    mobileMenu.setAttribute("aria-hidden", "false");

    menuButton.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";
  }


  function closeMenu() {

    mobileMenu.style.display = "none";

    mobileMenu.setAttribute("aria-hidden", "true");

    menuButton.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";
  }


  menuButton.addEventListener("click", () => {

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";


    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  });


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {
      closeMenu();
    }

  });

});