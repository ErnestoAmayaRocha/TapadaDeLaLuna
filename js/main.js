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

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".memory-carousel__track");
  const slides = carousel.querySelectorAll(".memory-carousel__slide");
  const prev = carousel.querySelector(".memory-carousel__arrow--prev");
  const next = carousel.querySelector(".memory-carousel__arrow--next");
  const dotsContainer = carousel.querySelector(".memory-carousel__dots");

  let current = 0;

  if (slides.length <= 1) return;

  // Crear dots
  slides.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "memory-carousel__dot";

    dot.setAttribute(
      "aria-label",
      `Ir a imagen ${index + 1}`
    );

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(
    ".memory-carousel__dot"
  );

  function updateCarousel() {
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "is-active",
        index === current
      );
    });
  }

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    updateCarousel();
  }

  prev.addEventListener("click", () => {
    goToSlide(current - 1);
  });

  next.addEventListener("click", () => {
    goToSlide(current + 1);
  });

  updateCarousel();
});

document.querySelectorAll(".memory-card__video").forEach((video) => {
  const button = video.parentElement.querySelector(
    ".memory-video__play"
  );

  button.addEventListener("click", () => {

    if (video.paused) {
      video.play();
      button.innerHTML = '<i class="ph ph-pause"></i>';
    } else {
      video.pause();
      button.innerHTML = '<i class="ph ph-play"></i>';
    }

  });

  video.addEventListener("ended", () => {
    button.innerHTML = '<i class="ph ph-play"></i>';
  });
});