<script src='https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'></script>;

window.addEventListener("load", () => {
  const isoGrid = document.querySelector(".isotope-container");
  const iso = new Isotope(isoGrid, {
    itemSelector: ".portfolio-item",
    layoutMode: "masonry",
  });

  // Filter to show only `.filter-app` items on load
  iso.arrange({ filter: ".filter-app" });

  // Update active filter class on menu
  const filters = document.querySelectorAll(".portfolio-filters li");
  filters.forEach((f) => f.classList.remove("filter-active"));
  document
    .querySelector('[data-filter=".filter-app"]')
    .classList.add("filter-active");
});
