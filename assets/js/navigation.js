document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(
    ".content h1[id], .content h2[id]"
  );

  const menuLinks = document.querySelectorAll(
    ".sidebar-nav a"
  );

  function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 150) {
        currentSection = section.getAttribute("id");
      }

    });

    menuLinks.forEach(link => {

      link.classList.remove("active");

      const linkTarget = link.getAttribute("href");

      if (linkTarget === "#" + currentSection) {
        link.classList.add("active");
      }

    });
  }

  window.addEventListener("scroll", updateActiveMenu);

  updateActiveMenu();

});