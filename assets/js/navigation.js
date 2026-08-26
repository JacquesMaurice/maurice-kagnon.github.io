document.addEventListener("DOMContentLoaded", function () {

  const menuLinks = document.querySelectorAll(".sidebar-nav a");
  const sections = document.querySelectorAll(
    ".content h1[id], .content h2[id]"
  );

  function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(function (section) {

      const position = section.getBoundingClientRect();

      if (position.top <= 180) {
        currentSection = section.id;
      }

    });

    menuLinks.forEach(function (link) {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", updateActiveMenu);

  updateActiveMenu();

});