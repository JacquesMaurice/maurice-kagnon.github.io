document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(
    ".content h1[id], .content h2[id]"
  );

  const links = document.querySelectorAll(
    ".sidebar-nav a"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const id = entry.target.getAttribute("id");

          links.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            '.sidebar-nav a[href="#' + id + '"]'
          );

          if (activeLink) {
            activeLink.classList.add("active");
          }
        }

      });

    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "-100px 0px -60% 0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

});