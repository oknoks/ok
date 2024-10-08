// For header-nav.html
fetch("https://cdn.jsdelivr.net/gh/oknoks/ok@main/partials/header-nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-nav").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching header nav:", error));

// For footer-nav.html
fetch("https://cdn.jsdelivr.net/gh/oknoks/ok@main/partials/footer-nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-nav").innerHTML = data;
  })
  .catch((error) => console.error("Error:", error));

// For loading main content
function loadContent(page) {
  fetch(`https://cdn.jsdelivr.net/gh/oknoks/ok@main/partials/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${page}:`, error));
}
